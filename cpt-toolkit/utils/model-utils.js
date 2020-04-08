import _ from 'lodash';
import { validTrim } from './form-valid-utils';
/**
 * iview table列定义字段
 */
const columnsProps = ['key', 'title', 'align', 'sortable', 'sortMethod', 'sortType', 'width', 'render', 'className', 'fixed', 'renderHeader', 'ellipsis', 'filters', 'filterMethod', 'filterMultiple', 'filteredValue', 'filterRemote'];

/**
 * 根据字段定义获取iview table列定义
 * @param {*} fields
 */
export const getColumns = (fields) => {
  return _.map(_.filter(_.sortBy(fields, 'order'), field => field.showInColumn), field => {
    return _.pick(field, columnsProps);
  });
};

/**
* 根据字段定义获取默认model
* @param {*} fields
*/
export const getDefaults = (fields) => {
  return _.transform(fields, (result, field) => {
    const defaults = field.default || field.defaults;
    if (_.isFunction(defaults)) {
      result.__defineGetter__(field.key, defaults);
    } else {
      result[field.key] = defaults;
    }
  }, {});
};
/**
* 根据字段定义获取表单验证规则
* @param {*} fields
*/
export const getRules = (fields) => {
  return _.transform(fields, (result, field) => {
    let rules = null;
    if (field.rules) {
      if (_.isArray(field.rules)) {
        rules = field.rules;
        rules.push(validTrim());
      } else if (_.isObject(field.rules)) {
        rules = [field.rules, validTrim()];
      }
    }
    result[field.key] = rules;
  }, {});
};

/**
* 根据字段定义获取表单字段长度
* @param {*} fields
*/
export const getMaxlength = (fields) => {
  return _.transform(fields, (result, field) => {
    result[field.key] = field.maxlength;
  }, {});
};
