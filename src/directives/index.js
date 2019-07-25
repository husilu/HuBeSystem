import test from './test';
import drag from './drag';

export default {
  install(Vue, options) {
    Vue.directive(test.name, test.directive);
    Vue.directive(drag.name, drag.directive);
  }
};
