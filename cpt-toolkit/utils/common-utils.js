import _ from 'lodash';

/**
 * 递归处理数据,除原始类型外
 * @param {Any} data
 * @param {Function} handler - 会传入每个原始类型值
 * @param {Any} key - 只用于来传递key给handler
 */
export const recurseData = (data, handler, key) => {
  let sourceData = _.cloneDeep(data);
  if (_.isArray(sourceData)) {
    sourceData = _.map(sourceData, (item, i) => {
      return recurseData(item, handler, i);
    });
  } else if (_.isPlainObject(sourceData)) {
    sourceData = _.transform(
      sourceData,
      (result, value, i) => {
        result[i] = recurseData(value, handler, i);
      },
      {}
    );
  } else {
    sourceData = handler ? handler(sourceData, key) : sourceData;
  }
  return sourceData;
};

/**
 *
 * @param {Array} data
 * @param {Function} handler
 * @param {String} prop - 递归属性 默认：children
 */
export const recurseItem = (data = [], handler = null, prop = 'children') => {
  return data.map(item => {
    if (item[prop]) {
      item[prop] = recurseItem(item[prop], handler, prop);
    }
    if (handler) {
      return handler(item);
    }
    return item;
  });
};

/**
 * 生成UUID
 */
export const uuid = () => {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  );
};

/**
 * 将地址链接进行下载
 * @param {string} src - 下载地址
 * @param {string} fileName - 下载文件名称
 */
export const downloadSrc = (src, fileName = '') => {
  const $a = document.createElement('a');
  $a.setAttribute('href', src);
  $a.setAttribute('download', fileName);
  const evObj = document.createEvent('MouseEvents');
  evObj.initMouseEvent(
    'click',
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    true,
    false,
    0,
    null
  );
  $a.dispatchEvent(evObj);
  $a.remove();
};
/**
 * 链接url
 * @param {...String} args
 */
export const joinUrl = (...args) => {
  return args
    .join('/')
    .replace(/\/+/gi, '/')
    .replace('http:/', 'http://');
};
