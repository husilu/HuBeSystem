import _ from 'lodash';

/**
 * 添加类
 * @param {Element} el dom元素
 * @param {String} classNames 类名
 **/
export const addClass = (el, classNames) => {
  const arr = _.compact(classNames.split(' '));
  const oldarr = _.compact(el.className.split(' '));
  arr.forEach(item => {
    if (!_.includes(oldarr, item)) {
      oldarr.push(item);
    }
  });
  el.className = oldarr.join(' ');
};

/**
 * 移除类
 * @param {Element} el dom元素
 * @param {String} classNames 类名
 **/
export const removeClass = (el, classNames) => {
  const arr = _.compact(classNames.split(' '));
  let oldarr = _.compact(el.className.split(' '));
  oldarr = _.filter(oldarr, item => !_.includes(arr, item));
  el.className = oldarr.join(' ');
};

/**
 * 获取元素的尺寸，隐藏元素也可以获取
 * @param {Element} el dom元素
 */
export const getSize = el => {
  const elem = el,
    noneNodes = [],
    nodeStyle = [];
  // 获取多层display：none;的元素
  getNoneNode(elem);
  setNodeStyle();
  const width = elem.clientWidth;
  const height = elem.clientHeight;
  resumeNodeStyle();
  function getNoneNode(node) {
    var display = getStyles(node).getPropertyValue('display'),
      tagName = node.nodeName.toLowerCase();
    if (display !== 'none' && tagName !== 'body') {
      getNoneNode(node.parentNode);
    } else {
      noneNodes.push(node);
      if (tagName !== 'body') {
        getNoneNode(node.parentNode);
      }
    }
  }

  // 这方法才能获取最终是否有display属性设置，不能style.display。
  function getStyles(elem) {
    // Support: IE<=11+, Firefox<=30+ (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }
    return view.getComputedStyle(elem);
  }

  function setNodeStyle() {
    var i = 0;
    for (; i < noneNodes.length; i++) {
      var visibility = noneNodes[i].style.visibility,
        display = noneNodes[i].style.display,
        style = noneNodes[i].getAttribute('style');
      // 覆盖其他display样式
      noneNodes[i].setAttribute(
        'style',
        'visibility:hidden;display:block !important;' + style
      );
      nodeStyle[i] = {
        visibility: visibility,
        display: display
      };
    }
  }

  function resumeNodeStyle() {
    var i = 0;
    for (; i < noneNodes.length; i++) {
      noneNodes[i].style.visibility = nodeStyle[i].visibility;
      noneNodes[i].style.display = nodeStyle[i].display;
    }
  }
  return {
    width: width,
    height: height
  };
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
 * 触发鼠标事件
 * @param {String} eventName - 鼠标事件名称 例：mousemove
 */
export const triggerMouseEvent = eventName => {
  if (document.createEvent) {
    var event = document.createEvent('MouseEvents');
    event.initEvent(eventName, true, false);
    window.dispatchEvent(event);
  } else if (document.createEventObject) {
    window.fireEvent(eventName);
  }
};

/**
 * 获取元素相对于窗口的位置
 */
export const getOffsetPosition = function (obj) {
  let left = obj.offsetLeft;
  let top = obj.offsetTop;
  let ofp = obj.offsetParent;
  while (ofp !== null) {
    left += ofp.offsetLeft;
    top += ofp.offsetTop;
    ofp = ofp.offsetParent;
  }
  return { left, top };
};

/**
 * html编码
 * @param {String} s 待编码的字符串
 */
export const htmlEncode = function (s) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(s));
  return div.innerHTML;
};

/**
 * html解码
 * @param {String} s 待解码的字符串
 */
export const htmlDecode = function (s) {
  const div = document.createElement('div');
  div.innerHTML = s;
  return div.innerText || div.textContent;
};
