<template lang="pug">
  div 书籍收集
    Form(ref='form' :model='formValidate' :rules='ruleValidate')
      FormItem(label='Name' prop='name')
        Input(v-model='formValidate.name' placeholder="Enter your name" type='number')
</template>
<script>
export default {
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
  }
};
</script>
<style lang="less">
</style>
