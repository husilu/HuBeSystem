<template lang="pug">
	Modal(v-model='visible' :title='title' @on-ok='okHandler' @on-cancel='cancelHandler')
		Form(ref='form' :model='model' :label-width="80")
			FormItem(label='姓名' prop='name')
				Input(v-model='model.name' placeholder='请输入姓名')
			FormItem(label='性别' prop='sex')
			FormItem(label='年龄' prop='age')
				Input(v-model='model.age' placeholder='请输入年龄')
			FormItem(label='地址' prop='address')
				span {{shuju}}
</template>

<script>
import _ from 'lodash';
import formMixin from "@/mixin/form";
export default {
  name: "NrglEdit",
  mixins: [formMixin('我是数据')],
  data() {
    return {
			visible: false,
			title: '',
			model: {}
    };
  },
  methods: {
    show(data) {
      // console.log(data);
      if (data) {
        this.model = _.cloneDeep(data);
        this.title = "编辑";
      } else {
        this.title = "新增";
      }
      this.visible = true;
    },
    cancelHandler() {
      this.$refs['form'].resetFields();
      this.visible = false;
    },
    okHandler() {
      this.$emit("on-saved", _.cloneDeep(this.model));
      this.cancelHandler();
    }
  }
};
</script>

<style lang="less">
.xxgl-nrgl {
}
</style>
