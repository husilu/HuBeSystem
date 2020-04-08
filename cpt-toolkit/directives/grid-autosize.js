import _ from 'lodash';
const gridAutosize = (el, adHeight) => {
  // 为了解决ie浏览器问题
  el.style.height = '0px';
  const tableCt = el.parentNode;
  const tableHead = el.querySelector('.ivu-table-header');
  const tableBody = el.querySelector('.ivu-table-body');
  const emptyTip = el.querySelector('.ivu-table-tip');
  const fixedBodys = el.querySelectorAll('.ivu-table-fixed-body');
  const elHeight = tableCt.clientHeight - adHeight;
  const bodyHeight = elHeight - (tableHead ? tableHead.clientHeight : 0);

  el.style.height = elHeight + 'px';
  _.each(fixedBodys, fixedBody => {
    fixedBody.style.height = bodyHeight - 18 + 'px';
  });
  emptyTip.style.height = tableBody.style.height = bodyHeight + 'px';
};

const resetStyles = el => {
  const fixedBodys = el.querySelectorAll('.ivu-table-fixed-body');
  const emptyTip = el.querySelector('.ivu-table-tip');
  el.style.height = null;
  _.each(fixedBodys, fixedBody => {
    fixedBody.style.height = null;
  });
  emptyTip.style.height = null;
};
const bindEvents = (el, { value = 50 }) => {
  el.resizeHandler && window.removeEventListener('resize', el.resizeHandler);
  if (value !== false) {
    el.resizeHandler = _.throttle(gridAutosize.bind(null, el, value), 100);
    window.addEventListener('resize', el.resizeHandler);
    el.resizeHandler();
  } else {
    resetStyles(el);
    el.resizeHandler = null;
  }
};
export default {
  name: 'grid-autosize',
  directive: {
    inserted: bindEvents,
    componentUpdated: bindEvents,
    unbind(el) {
      window.removeEventListener('resize', el.resizeHandler);
    }
  }
};
