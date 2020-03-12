import { BASEURL, ENV } from './consts';
import _ from 'lodash';
// import storages from 'storejs/storages/all';
// import storeEngine from 'storejs/src/store-engine';
/**
 * 文件大小格式化
 * @param {Number} size - 大小 单位 B
 */
export const sizeFormat = (size) => {
  const d = 1024;
  if (size / (d ** 2) < 1) {
    return (size / d).toFixed(2) + 'KB';
  }
  if (size / (d ** 3) < 1) {
    return (size / d ** 2).toFixed(2) + 'MB';
  }
  if (size / (d ** 4) < 1) {
    return (size / d ** 3).toFixed(2) + 'GB';
  }
};

export const downloadSrc = (src, fileName = '') => {
  let $a = document.createElement('a');
  // 添加下载文件标识
  // if (!_.includes(src, 'download=true') && _.includes(src, '?')) {
  //   src += `&t=${_.now()}&download=true`;
  // }
  $a.setAttribute('href', src);
  $a.setAttribute('download', fileName);
  $a.click();
};
/**
 * 通过iframe下载
 * @param {string} src 下载链接
 */
export const downloadByIframe = src => {
  let $iframe = document.getElementById('download-iframe');
  // 添加下载文件标识
  // if (!_.includes(src, 'download=true') && _.includes(src, '?')) {
  //   src += `&t=${_.now()}&download=true`;
  // }
  if (!$iframe) {
    $iframe = document.createElement('iframe');
    $iframe.style.display = 'none';
    $iframe.id = 'download-iframe';
    document.querySelector('body').appendChild($iframe);
  }
  $iframe.src = src;
};
/**
 * 下载文件
 */
export const download = ({ path, fileName, mime }) => {
  const url = mapRootUrl('ags-system-setting/fastdfs/download/file');
  let downloadUrl = `${url}?filePath=${encodeURIComponent(path)}`;
  if (fileName) {
    downloadUrl += `&fileName=${encodeURIComponent(fileName)}`;
  }
  if (mime) {
    downloadUrl += `&mime=${encodeURIComponent(mime)}`;
  }
  downloadByIframe(downloadUrl);
};

/**
 * 触发window resize事件
 */
export const triggerResize = () => {
  if (document.createEvent) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, true);
    window.dispatchEvent(event);
  } else if (document.createEventObject) {
    window.fireEvent('onresize');
  }
};

/**
 * 获取渐变色值
 */
export const getColorFromPercent = (percent) => {
  let colorStart = '66AB56';
  let colorStop = 'FFFF00';
  let colorEnd = 'FFA700';
  function subColor(i) {
    let start = parseInt(colorStart.substr(i, 2), 16);
    let stop = parseInt(colorStop.substr(i, 2), 16);
    let end = parseInt(colorEnd.substr(i, 2), 16);
    let delta = end - start;
    let target = percent / 100 * delta + start;
    let z = '';
    if (target < stop) {
      z = _.padStart((start + (target - start) / 100 * percent).toString(16).substr(0, 2), 2, '0');
    } else {
      z = _.padStart((stop + (target - stop) / 100 * percent).toString(16).replace(/\.\w+/, ''), 2, '0');
    }
    return z;
  }
  let r = subColor(0);
  let g = subColor(2);
  let b = subColor(4);
  return `#${r + g + b}`;
};

/**
 * html编码
 * @param {String} s 待编码的字符串
 */
export const htmlEncode = function (s) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(s));
  return div.innerHTML;
};

/**
 * html解码
 * @param {String} s 待解码的字符串
 */
export const htmlDecode = function (s) {
  let div = document.createElement('div');
  div.innerHTML = s;
  return div.innerText || div.textContent;
};

/**
 * 获取元素相对于窗口的位置
 */
export const getOffsetPosition = function (obj) {
  let left = obj.offsetLeft;
  let top = obj.offsetTop;
  let ofp = obj.offsetParent;
  while (ofp != null) {
    left += ofp.offsetLeft;
    top += ofp.offsetTop;
    ofp = ofp.offsetParent;
  }
  return { left, top };
};

/**
 * 链接url
 * @param {...String} args
 */
export const joinUrl = (...args) => {
  return args.join('/').replace(/\/+/ig, '/').replace('http:/', 'http://');
};

/**
 * 将url映射为接口对应的地址
 * @param {...String} args
 */
export const mapRootUrl = (...args) => {
  return joinUrl(BASEURL, ...args);
};

/**
 * 获取 webpack 环境变量配置
 */
export const getProcessEnv = () => {
  const env = process.env;
  env.DEBUG = env.NODE_ENV !== 'production';
  // 在开发时用来动态切换子系统
  if (env.DEBUG) {
    const name = sessionStorage.getItem('name');
    name && (env.NAME = name);
  }
  return env;
};

/**
 * 获取浏览器存储器
 * @param {string} type - 可为：local、session、cookie、memory
 */
// export const getStore = (type = 'session') => {
//   const storage = _.find(storages, item => item.name === type + 'Storage');
//   return storeEngine.createStore([storage], [require('storejs/plugins/json2')]);
// };

/**
 * 加载pdf
 */
export const loadPdf = (src) => {
  const attachScript = () => {
    const src = './assets/vendors/pdf.min.js';
    return new Promise((resolve) => {
      if (!window.PDFJS) {
        const scriptEl = document.createElement('script');
        scriptEl.src = src;
        scriptEl.onload = () => {
          resolve();
        };
        document.querySelector('head').appendChild(scriptEl);
      } else {
        resolve();
      }
    });
  };
  return new Promise(resolve => {
    attachScript().then(() => {
      window.PDFJS.getDocument({
        url: src,
        withCredentials: ENV.DEBUG
      }).then((pdf) => {
        resolve(pdf);
      });
    });
  });
};
/**
 * pdf转换成图片base64数组
 * @param {*} src
 * @param {Number} size - 读取多少页
 */
export const pdf2ImagesBase64 = async (src, size = 10, scale = 1.5) => {
  const pdf = await loadPdf(src);
  const takePage = Math.min(pdf.numPages, size);
  return Promise.all(_.map(new Array(takePage), async (value, index) => {
    const page = await pdf.getPage(index + 1);
    const viewport = page.getViewport(scale);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderTask = page.render({
      canvasContext: context,
      viewport: viewport
    });
    return new Promise(resolve => {
      renderTask.then(() => {
        resolve(canvas.toDataURL());
      });
    });
  }));
};

const getRatioCm = () => {
  let el = document.querySelector('#ratio');
  const body = document.querySelector('body');
  if (!el) {
    el = document.createElement('div');
    el.style.position = 'fixed';
    el.style.zIndex = '-1';
    el.style.width = '1cm';
    el.style.height = '1cm';
    el.id = 'ratio';
    body.appendChild(el);
  }
  return el.offsetWidth;
};
export const px2cm = (num) => {
  return _.round(num / getRatioCm(), 4);
};
export const cm2px = (num) => {
  return _.round(num * getRatioCm(), 4);
};

// 翻页
export const pagingData = (data, { page, pageSize, sort }) => {
  const start = page * pageSize;
  const end = start + pageSize;
  return _.slice(data, start, end);
};
