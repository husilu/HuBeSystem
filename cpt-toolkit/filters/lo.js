import _ from 'lodash';
export const filterName = 'lo';
export const filter = (target, methodName, ...args) => {
  return _[methodName](target, ...args);
};
