import * as get from './get';
import * as moment from './moment';
import * as lo from './lo';
import * as round from './round';

const filters = {
  get,
  moment,
  lo,
  round
};
export default {
  install(Vue, options) {
    for (const key in filters) {
      if (filters.hasOwnProperty(key)) {
        Vue.filter(key, filters[key].filter);
      }
    }
  }
};
