export const Smap = {
  bitToKB: val => {
    return val + 'Kb';
  },
  bitToMB: val => {
    return val + 'Mb';
  }
};

const strategyContext = function (type, rowKey) {
  return function (row, column, cellValue, index) {
    Smap[type](row[rowKey]);
  };
};

export default strategyContext;
