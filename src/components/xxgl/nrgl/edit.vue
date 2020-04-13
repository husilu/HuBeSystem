<template lang="pug">
	Modal(v-model='visible' :title='title')
		Form(ref='form' :model='model' :label-width="80" :rules='rules') 
			FormItem(label='姓名' prop='name')
				Input(v-model='model.name' placeholder='请输入姓名')
			FormItem(label='性别' prop='sex')
				Select(v-model='model.sex' placeholder='请选择性别')
					Option(value='male') male
					Option(value='famale') famale
			FormItem(label='年龄' prop='age')
				Input(v-model='model.age' placeholder='请输入年龄')
			FormItem(label='地址' prop='address')
				Input(v-model='model.address' placeholder='请输入地址')
			FormItem(label='url' prop='url')
				Input(v-model='model.url' placeholder='二维码网址')
		div(slot='footer')
			Button(type='primary' @click='okHandler') 提交
			Button(type='default' @click='cancelHandler') 取消
</template>

<script>
import _ from "lodash";
import api from "@/api/xxgl.js";
// import formMixin from '@/mixin/form';
export default {
  name: "NrglEdit",
  // mixins: [formMixin('我是数据')],
  data() {
    return {
      visible: false,
      title: "编辑",
      model: {},
      isEdit: false,
      rules: {
        name: [
          {
            required: true,
            message: "The name cannot be empty"
          }
        ],
        age: [
          {
            required: true,
            message: "The age cannot be empty"
          }
        ],
        sex: [
          {
            required: true,
            message: "The sex cannot be empty"
          }
        ],
        address: [
          {
            required: true,
            message: "The address cannot be empty"
          }
        ]
      }
    };
  },
  methods: {
    show(id) {
      this.visible = true;
      if (id) {
        api.search_nrglid(id).then(res => {
          this.model = _.cloneDeep(res.data[0]);
        });
        this.isEdit = true;
      } else {
        this.isEdit = false;
      }
    },
    cancelHandler() {
      this.$refs["form"].resetFields();
      this.visible = false;
      this.isEdit = false;
    },
    okHandler() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (!this.isEdit) {
            api.add_nrgl(this.model).then(res => {
              this.cancelHandler();
              this.$emit('on-saved');
            });
          } else {
            api.edit_nrgl(this.model).then(res => {
              this.cancelHandler();
              this.$emit('on-saved');
            });
          }
        } else {
          this.$Message.error("请将数据填写完整!");
        }
      });
    }
  }
};
</script>

<style lang="less">
.xxgl-nrgl {
}
</style>
