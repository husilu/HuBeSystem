<template lang="pug">
<<<<<<< HEAD
  div 书籍收集
    Form(ref='form' :model='formValidate' :rules='ruleValidate')
      FormItem(label='Name' prop='name')
        Input(v-model='formValidate.name' placeholder="Enter your name" type='number')
=======
  div 书记手机
    div.mb3
      Button(type='default' @click='search') 刷新表格
    Table(:columns="vcolumns" :data="[]" border)
>>>>>>> 5a0936b1922068a6fe6ef9df4b4f5266487399f5
</template>
<script>
import ajax from "@/utils/request";
import { toGetColumns } from '@/utils/customize';
export default {
<<<<<<< HEAD
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ]
      }
    };
=======
  components: {},
  data() {
    return {
      vcolumns: []
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      ajax.get("/customize").then(res => {
        this.vcolumns = toGetColumns(res.data);
      });
    }
>>>>>>> 5a0936b1922068a6fe6ef9df4b4f5266487399f5
  }
};
</script>
<style lang="less">
</style>
