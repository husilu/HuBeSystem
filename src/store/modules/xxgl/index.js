import _ from 'lodash';
// import api from './api/index.js';

const namespace = 'xxgl';
const r = ac => `${namespace}/${ac}`;
export const moduleName = namespace;

export const GETTER_DATA = r('GETTER_DATA');
export const ADD_SHOP = r('ADD_SHOP');
export const GETTER_SHOP_DATA = r('GETTER_SHOP_DATA');
export const CLEAN_SHOP = r('CLEAN_SHOP');
export const GETTER_TOTAL_PRICE = r('GETTER_TOTAL_PRICE');

// mutations
export const SET_DATA = r('SET_DATA');

// actions
export const SEARCH = r('SEARCH');

export const model = function () {
  return {
    state: {
      data: [{ name: '三星', val: 1000, id: 1 },
      { name: '苹果', val: 1200, id: 2 },
      { name: '华为', val: 1500, id: 3 }],
      shop_data: [],
      total_price: 0
    },
    getters: {
      [GETTER_DATA]: state => _.cloneDeep(state.data),
      [GETTER_SHOP_DATA]: state => _.cloneDeep(state.shop_data),
      [GETTER_TOTAL_PRICE]: state => _.cloneDeep(state.total_price)
    },
    mutations: {
      [SET_DATA](state, { data }) {
        state.data = data;
      },
      [ADD_SHOP](state, data) {
        let arr = _.cloneDeep(state.shop_data);
        if (state.shop_data.length > 0) {
          if (arr.some(item => {
            return item.id === data.id;
          })) {
            _.forEach(arr, (item, index) => {
              if (item.id === data.id) {
                state.shop_data[index].num++;
              }
            });
          } else {
            state.shop_data.push({ name: data.name, val: data.val, num: 1, id: data.id });
          }
        } else {
          state.shop_data.push({ name: data.name, val: data.val, num: 1, id: data.id });
        }
      },
      [CLEAN_SHOP](state, data) {
        state.shop_data = [];
      }
    },
    actions: {
      async [SEARCH]({ commit }, param) {

      }
    }
  };
};

export default model();
