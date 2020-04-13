import { modelUtils } from 'cpt-toolkit';
// import moment from 'moment';
import _ from 'lodash';
export const toGetColumns = function (fields) {
  let newcolumns = _.map(fields, item => {
    if (item.inputType === 3) {
      item.render = (h, { row }) => {
        return <span>时间戳</span>;
      };
      return item;
    } else {
      return item;
    }
  });
  return modelUtils.getColumns(newcolumns);
};

// export const columns = modelUtils.getColumns(fields);
// export const toGetColumns = function (fields) {
//   console.log(fields);
//   return modelUtils.getColumns(fields);
// };
