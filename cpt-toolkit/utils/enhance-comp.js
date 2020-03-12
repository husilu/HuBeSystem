import _ from 'lodash';

function invokeAspects(aspectMethods) {
  const args = _.slice(_.toArray(arguments), 1);
  if (aspectMethods) {
    if (_.isFunction(aspectMethods)) {
      Reflect.apply(aspectMethods, this, args);
    }
    if (_.isArray(aspectMethods)) {
      _.each(aspectMethods, temp => {
        if (_.isFunction(temp)) {
          Reflect.apply(temp, this, args);
        }
      });
    }
  }
}
/**
 *获取拦截器，包含混合中的拦截器
 * @param {Object} comp  vue组件定义
 */
function getAspects(comp) {
  const defAspects = comp.aspects || {};
  const p = (a, b) => _.compact(_.flatten([a, b]));
  // 混合中定义的
  const mixinsAspects = _.transform(
    _.compact(
      _.map(comp.mixins || [], mixin => {
        return mixin.aspects;
      })
    ),
    (result, aspect) => {
      return _.mergeWith(result, aspect, p);
    },
    {}
  );
  // 继承中定义的
  const extendsAspects = _.get(comp.extends, 'aspects');
  return _.mergeWith(defAspects, mixinsAspects, extendsAspects, p);
}

function attachAspects(aspectMethods, name, body) {
  // 执行前拦截器
  const beforeMethods = new Array(aspectMethods['before' + _.upperFirst(name)]);
  // 执行后拦截器
  const afterMethods = new Array(aspectMethods['after' + _.upperFirst(name)]);
  return function() {
    const args = _.toArray(arguments);
    // 执行before拦截
    beforeMethods &&
      Reflect.apply(invokeAspects, this, _.concat(beforeMethods, args));
    // 执行原始方法
    const res = Reflect.apply(body, this, args);
    // 如果返回委托
    if (res && _.isFunction(res.then)) {
      res
        .then(d => {
          Reflect.apply(invokeAspects, this, _.concat(afterMethods, d, args));
        })
        .catch(d => {
          Reflect.apply(invokeAspects, this, _.concat(afterMethods, d, args));
        });
    } else {
      Reflect.apply(invokeAspects, this, _.concat(afterMethods, res, args));
    }
    return res;
  };
}

/**
 * 处理mixin切面编程
 * @param {Object} comp
 */
const enhanceMixins = comp => {
  const mixins = comp.mixins;
  if (mixins && mixins.length) {
    const aspectMethods = getAspects(comp);
    _.each(mixins, mixin => {
      const orginMethods = mixin.methods;
      const distMethods = {};
      if (orginMethods) {
        _.each(orginMethods, (body, name) => {
          distMethods[name] = Reflect.apply(attachAspects, this, [
            aspectMethods,
            name,
            body
          ]);
        });
      }
      mixin.methods = distMethods;
    });
  }
};

/**
 * 处理extends切面编程
 * @param {Object} comp
 */
const enhanceExtends = comp => {
  if (comp.extends) {
    const orginMethods = comp.extends.methods;
    const distMethods = {};
    const aspectMethods = getAspects(comp);
    if (orginMethods) {
      _.each(orginMethods, (body, name) => {
        distMethods[name] = Reflect.apply(attachAspects, this, [
          aspectMethods,
          name,
          body
        ]);
      });
    }
    comp.extends.methods = distMethods;
  }
};

/**
 * vue组件增强功能
 * 增加切面拦截功能,
 */
export default comp => {
  const methods = comp.methods;
  const orginMethods = methods;
  const distMethods = {};
  const aspectMethods = getAspects(comp);
  _.each(orginMethods, (body, name) => {
    distMethods[name] = Reflect.apply(attachAspects, this, [
      aspectMethods,
      name,
      body
    ]);
  });
  comp.methods = distMethods;
  enhanceMixins(comp);
  enhanceExtends(comp);
  return comp;
};
