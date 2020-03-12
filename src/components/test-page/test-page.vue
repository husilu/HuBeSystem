<template>
  <div class="test-page">
    <!-- <form-tab v-model="val"></form-tab>
    <Button @click="changeVal">v-model测试</Button>
    <span>n123</span>-->
    <!-- <menu-test :menu="menuList"></menu-test> -->
    <!-- <ul class="test-menu">
      <li>
        <span>测试1</span>
      </li>
      <li>
        <span @click="open">测试2</span>
        <ul :class="isShow ? 'noShow' : 'isShow'" class="childul">
          <li>测试2-1</li>
          <li>测试2-2</li>
          <li>测试2-3</li>
        </ul>
      </li>
    </ul>-->
    <!-- <hsl-input placeholder="请输入" type="text" @focus="FocusHandler"></hsl-input>
    <child :prop-data="arr" name="rose" @click="change"></child>
    <p id="inner"></p>
    <p>{{ shuju }}</p>
    <input type="text" id="model" />
    <p>计数</p>
    <p id="count">1</p>
    <Button id="add">+1</Button>
    <Button id="minus">-1</Button>-->
    <!-- <div>
      <Form ref="formDynamic" :model="formCustom" :label-width="80" style="width: 300px">
        <FormItem label="Username" prop="password">
          <Input type="text" v-model="formCustom.username"></Input>
        </FormItem>
        <FormItem label="Password" prop="password">
          <Input type="password" v-model="formCustom.password"></Input>
        </FormItem>
      </Form>
      <Button @click="registerHandler">注册</Button>
    </div>-->
    <detail></detail>
    <My-btn @click="clickHandler" type="warning" size="small">按钮1</My-btn>
  </div>
</template>

<script>
import MyBtn from './mybutton';
import formTab from "./form-tab";
import child from "./child";
import HslInput from "../common/hsl-input";
// import formatter from "./formatter";
import MenuTest from "@/components/menu-test/menu-test"; 
// import _ from "lodash";
import formMixin from "@/mixin/form";
// import export1 from "./export1";
import api from "@/api/test-page";
import detail from "./detail";
// const myobj = require("./export");
// export1("huangxiaoming").getName();
// myobj("rose");
// myobj("jack");

// MyName.prototype._getname = function() {
//   console.log(this);
//   console.log(this.age);
// };

// let rose = new MyName();

// rose._getname();
export default {
  name: "TestPage",
  components: {
    MenuTest,
    HslInput,
    child,
    formTab,
    detail,
    MyBtn
  },
  mixins: [formMixin("我是数据")],
  data() {
    return {
      val: 0,
      myval: "双向数据绑定",
      formCustom: {},
      ruleCustom: {
        passwd: [{ validator: this.validatePass, trigger: "blur" }],
        passwdCheck: [{ validator: this.validatePassCheck, trigger: "blur" }]
      },
      arr: [2, 3, 4],
      menuList: [
        {
          title: "菜单1",
          children: [
            {
              title: "菜单1-1"
            },
            {
              title: "菜单1-2"
            }
          ]
        },
        {
          title: "菜单2"
        },
        {
          title: "菜单3"
        }
      ],
      isShow: false
    };
  },
  mounted() {
    api.search().then(res => {
      console.log(res);
    });
  },
  updated() {
    console.log("updated");
  },
  methods: {
    clickHandler() {
      console.log('按钮点击');
    },
    getMusicList(param) {
      api.playlist(param).then(res => {
        console.log(res);
      });
    },
    change() {
      console.log("111");
    },
    changeVal() {
      this.val = this.val + 1;
    },
    validatePass(rule, value, callback) {
      if (value === "") {
        callback(new Error("Please enter your password"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    },
    validatePassCheck(rule, value, callback) {
      if (value === "") {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    },
    open() {
      this.isShow = !this.isShow;
    },
    FocusHandler() {
      console.log("FocusHandler");
    },
    registerHandler() {
      let model = this.formCustom;
      api.register(model).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less">
.test-page {
  .test-menu:hover .childul {
    height: 200px;
  }
  .childul {
    padding-left: 10px;
    height: 0;
    overflow: hidden;
    transition: all 0.3s ease-in;
    li {
      width: 200px;
      background: #000;
      display: block;
    }
  }
  .glass {
    border-left: 1px solid #000;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 10px;
    height: 500px;
    width: 200px;
    .glass-content {
      position: relative;
      background-color: rgb(246, 252, 255);
    }
    .water-1 {
      position: absolute;
      bottom: 0px;
      background-color: rgb(118, 218, 255);
      height: 400px;
    }
    .water-2 {
      position: absolute;
      bottom: 0px;
      background-color: rgb(172, 232, 255);
    }
  }
}
</style>
