<template lang="pug">
  div.login
    div.sign-in-box
      div.sign-in-container
        div.sign-container
          div.sign-title.mb10 欢迎
          Form.mb10(:model='model' :rules='rules' ref='form')
            Form-item(prop='username')
              Input(v-model='model.username' placeholder='请填写用户名' type='text')
            Form-item(prop='password')
              Input(v-model='model.password' placeholder='请填写密码' type='password')
        Button(@click='okHandler' type="success" long) 登录
</template>

<script>
import api from "@/api/login";
export default {
  name: "Login",
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    okHandler() {
      // let url = "http://localhost:8880/login";
      let obj = {
        username: this.model.username,
        password: this.model.password
      };
      this.$refs["form"].validate(valid => {
        if (valid) {
          // let obj = {
          //   username: this.model.username,
          //   password: this.model.password
          // };
          api.login(obj).then(res => {
            if (res.data.code === 0) {
              localStorage.setItem("ms_user", res.data.data.userName);
              this.$router.push("/");
            } else {
              this.$Message.info(res.data.message);
            }
          });
        } else {
          return false;
        }
      });
      // let username = this.model.username;
      // localStorage.setItem('ms_user', username);
      // this.$router.push('./dashboard');
    }
  }
};
</script>

<style lang="less">
.login {
  display: flex;
  align-items: center;
  align-content: center;
  background-color: #edeff1;
  height: 100vh;
  .sign-in-box {
    width: 400px;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 20px;
    background: white;
    padding: 40px 0px 33px;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(238, 238, 238);
    margin: 0px auto;
  }
  .sign-in-container {
    max-width: 340px;
    margin: 0px auto;
  }
  .sign-container {
    display: flex;
    flex-direction: column;
    -webkit-box-align: stretch;
    align-items: stretch;
  }
  .sign-title {
    text-align: center;
    font-size: 26px;
    color: rgb(84, 110, 122);
  }
  .mb10 {
    margin-bottom: 10px;
  }
}
</style>
