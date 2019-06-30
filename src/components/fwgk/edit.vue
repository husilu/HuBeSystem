<template lang="pug">
  Modal(v-model='modal' title='弹窗测试' @on-ok='okHandle' @on-cancel='cancelHandle' )
    Form(:model="model" :rules="ruleInline" ref="form" inline :label-width="40" label-position="left")
      FormItem(prop="user" label='用户')
        Input(type='text' v-model='model.user' placeholder='请输入名称')
</template>

<script>
import _ from 'lodash';
import { fwgkDefaults } from 'store/fwgk/model';
import formMixin from '@/mixin/form';
export default {
  mixins: [formMixin({ defaults: _.cloneDeep(fwgkDefaults) })],
  data() {
    const validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your user again'));
      } else {
        callback();
      }
    };
    return {
      modal: false,
      formInline: {
        user: ''
      },
      ruleInline: {
        user: [{ validator: validateUser, trigger: 'blur' }]
      }
    };
  },
  methods: {
    openModal() {
      this.modal = true;
    },
    okHandle() {
      this.cancelHandle();
    },
    cancelHandle() {
      this.resetForm();
      this.modal = false;
    },
    resetForm() {
      this.$refs.form.resetFields();
    }
  }
};
</script>

<style lang="less">
</style>
