import _ from 'lodash';
export const filterName = 'get';
export const filter = (target, ...args) => {
  return _.get(target, ...args);
};
