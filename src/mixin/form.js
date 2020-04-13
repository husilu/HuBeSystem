import { FORM_STATUS } from '@/utils/consts';
import _ from 'lodash';
export default (opt = {
  ref: 'form'
}) => ({
  props: {
    initModel: {
      type: Object
    }
  },
  data() {
    return {
      FORM_STATUS,
      model: this.initModel || this._getDefaults()
    };
  },
  watch: {
    initModel(nv) {
      this.model = nv || this._getDefaults();
    }
  },
  mounted() {
    this.$sub('on-invalid-model', this.invalidModelHandler);
  },
  beforeDestory() {
    this.$unsub('on-invalid-model', this.invalidModelHandler);
  },
  methods: {
    invalidModelHandler(data) {
      if (this.$refs[opt.ref || 'form']) {
        const fields = this.$refs.form.fields;
        _.each(data, (message, key) => {
          let fieldName = key.replace('field.', '');
          let fieldComp = _.find(fields, comp => comp.prop === fieldName);
          if (fieldComp) {
            fieldComp.validateMessage = message;
            fieldComp.validateState = 'error';
            fieldComp.$el.addEventListener('input', () => {
              fieldComp.validateMessage = '';
              fieldComp.validateState = '';
            });
          }
        });
      }
    },
    // 重置表单
    reset() {
      _.each(this.$refs.form.$el.getElementsByTagName('input'), item => item.blur());
      this.model = this._getDefaults();
      this.$refs.form.resetFields();
      // 自定义重置方法
      _.isFunction(this.customReset) && this.customReset();
    },
    getModel() {
      let model = _.cloneDeep(this.model);
      return new Promise(resolve => {
        this.$refs.form.validate(valid => {
          if (valid) {
            // 自定义的获取model的方法
            if (_.isFunction(this.customGetModel)) {
              model = this.customGetModel(model);
            }
            resolve(_.cloneDeep(model));
          } else {
            resolve(null);
          }
        });
      });
    },
    _getDefaults() {
      if (_.isFunction(opt.defaults)) {
        return Reflect.call(opt.defaults, this);
      }
      if (_.isObject(opt.defaults)) {
        return _.cloneDeep(opt.defaults);
      }
    }
  }
});
