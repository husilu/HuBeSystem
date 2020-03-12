import _ from 'lodash';
import { addClass } from '../utils/dom-utils';
/**
 * 用法：v-inner-class="{'.target':'hover'}"
 */
export default {
  name: 'inner-class',
  directive: (el, { value: targetClasses }) => {
    if (_.isObject(targetClasses)) {
      _.each(targetClasses, (v, k) => {
        const innerEls = el.querySelectorAll(k);
        _.each(innerEls, iel => addClass(iel, v));
      });
    }
  }
};
