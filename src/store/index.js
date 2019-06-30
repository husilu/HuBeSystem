import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// 动态引入module
const contexts = require.context('./modules', true);
const modules = {};
contexts.keys().forEach((key) => {
  const name = contexts(key).moduleName; // 把包路径名变成导出名
  const module = contexts(key).default;
  name && (modules[name] = module);
});
const store = new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
});
export default store;
