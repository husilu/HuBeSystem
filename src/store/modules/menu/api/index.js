import _ from 'lodash';
import menuData from '@/assets/static/menu-data.json';

export default {
  getAll() {
    return new Promise(resolve => resolve({ success: true, data: _.cloneDeep(menuData) }));
  }
};
