<template lang="pug">
  Modal(title='编辑' v-model='visible')
    Form(ref="form" :model="model" :labelWidth="120" labelPosition='right')
      Row(v-for='item, index in formData' :key='index')
        Col(span="11")
          Form-item(:label="item.label" :prop="item.prop")
            Input(type="text" v-model="model[item.prop]")
</template>

<script>
import formMixin from "@/mixin/form";
// import { modelUtils } from "cpt-toolkit";
// import _ from "lodash";
import enhance from "@/utils/enhance-comp";
import ajax from "@/utils/request";
import _ from 'lodash';
// import { ryglRules, ryglDefaults } from 'store/zygl/rygl/model';
export default enhance({
  mixins: [formMixin()],
  data() {
    return {
      visible: false,
      formData: [], // 表单属性的字段
      id: ""
      // model: {} // 表单属性值的默认值
      // rules: [] // 验证规则
    };
  },
  computed: {
    rules() {
      const rruu = _.map(this.formData, item => {
        // if()
      });
      rruu.identificationNumber = {
        validator: this.idCardValidator,
        trigger: "blur"
      };
      rruu.accountName = {
        validator: this.userNameValidator,
        trigger: "blur"
      };
      rruu.accountPassword = {
        validator: this.passwordValidator
      };
      return rruu;
    }
  },
  methods: {
    // numberValidator() {

    // },
    // stringVali
    show(row) {
      this.id = row;
      this.visible = true;
      this.search();
    },
    search() {
      ajax
        .get(
          "http://rap2.taobao.org:38080/app/mock/243364/api/v1/customizeForm"
        )
        .then(res => {
          this.formData = res.data;
          console.log(this.formData);
        });
    }
  }
});
</script>

<style lang="less">
.xxzx-sjsj {
}
</style>
