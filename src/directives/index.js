import test from './test';

export default {
  install(Vue, options) {
    Vue.directive(test.name, test.directive);
  }
};
