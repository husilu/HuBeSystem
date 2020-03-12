import { modelUtils } from 'cpt-toolkit';
// import { REGULAR } from '@/utils/consts';
// import moment from 'moment';
export const toGetColumns = function (fields) {
  console.log(fields);
  return modelUtils.getColumns(fields);
};
// export const columns = modelUtils.getColumns(fields);
