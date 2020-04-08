// import { FORM_STATUS } from '@/utils/consts';
// import _ from 'lodash';
export default (shuju) => ({
  created() {
    console.log('mixin...');
    this.shuju = shuju;
  }
});
