import _ from 'lodash';
export const filterName = 'round';
export const filter = (target, precision) => {
  if (target === undefined || target === null) {
    return '';
  }
  if (!_.isNumber(target)) {
    return target;
  }
  return target.toFixed(precision);
};
