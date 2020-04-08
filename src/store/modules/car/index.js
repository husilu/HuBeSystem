import api from './api';
import _ from 'lodash';

const namespace = 'car';
const r = ac => `${namespace}/${ac}`;
export const moduleName = namespace;

// getters
export const GETTER_DATA = r('GETTER_DATA');
export const GETTER_COLUMNS = r('GETTER_COLUMNS');
export const GETTER_TOTAL = r('GETTER_TOTAL');

// mutations
export const SET_DATA = r('SET_DATA');

// actions
export const SEARCH = r('SEARCH');

export const model = function (api) {
  return {
    state: {
      data: [],
      total: 0
    },
    getters: {
      [GETTER_DATA]: state => _.cloneDeep(state.data),
      [GETTER_TOTAL]: state => state.total
    },
    mutations: {
      [SET_DATA](state, { data, total }) {
        state.data = data;
        state.total = total;
      }
    },
    actions: {
      async [SEARCH]({ commit }, param) {
        
      }
    }
  };
};

export default model(api);
