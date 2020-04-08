import drag from './drag';
import gridAutoSize from './grid-autosize';
import innerClass from './inner-class';

export default {
  install(Vue, options) {
    Vue.directive(drag.name, drag.directive);
    Vue.directive(gridAutoSize.name, gridAutoSize.directive);
    Vue.directive(innerClass.name, innerClass.directive);
  }
};
