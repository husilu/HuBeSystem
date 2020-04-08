<template>
  <div class="test-page">
<<<<<<< HEAD
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
=======
    <div id='BdMap' class='BdMap'></div>
    <Button @click='moveMap'>移动地图</Button>
    <Button @click='scaleMap'>缩放地图</Button>
    <Button @click='setMark'>设置标签</Button>
    <Button @click='getInfor'>获取信息窗口</Button>
    <Button @click='addRuler'>获取尺子</Button>
>>>>>>> c55787a82fa67ea23628bef3aaedfb351dc4b8cc
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
/* eslint-disable */
import _ from "lodash";
import BMap from "BMap";
let MYDIS = {};
let MAP = {};
export default {
  name: "TestPage",
  data() {
    return {
      map: {},
      locationlist: [
        { lng: "104.06", lat: "30.67", name: "成都" },
        { lng: "104.32", lat: "30.88", name: "金堂" },
        { lng: "104.94", lat: "30.57", name: "双流" },
        { lng: "103.29", lat: "30.20", name: "浦江" }
>>>>>>> c55787a82fa67ea23628bef3aaedfb351dc4b8cc
      ],
      opts: {
        width: 250, // 信息窗口宽度
        height: 80, // 信息窗口高度
        title: "信息窗口", // 信息窗口标题
        enableMessage: true //设置允许信息窗发送短息
      }
    };
  },
  mounted() {
<<<<<<< HEAD
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
=======
    this.initMap();
  },
  methods: {
    initMap() {
      var map = new BMap.Map("BdMap");
      var point = new BMap.Point(104.06, 30.67);
      map.centerAndZoom("成都", 10);
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
      _.each(this.locationlist, item => {
        // 给每一个标记添加信息窗口
        var marker = new BMap.Marker(new BMap.Point(item.lng, item.lat));
        var content = item.name;
        map.addOverlay(marker);
        this.addClickHandler(content, marker, map);
      });
      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map, panel: "r-result" }
      });
      // console.log(local.search("餐饮"));
    },
    addClickHandler(content, marker, map) {
      marker.addEventListener("click", e => {
        this.openInfo(content, e, map);
      });
    },
    openInfo(content, e, map) {
      var p = e.target;
      var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
      var infoWindow = new BMap.InfoWindow(content, this.opts); // 创建信息窗口对象
      map.openInfoWindow(infoWindow, point); //开启信息窗口
    },
    moveMap() {
      this.map.panTo(new BMap.Point(104.94, 30.57));
    },
    scaleMap() {
      this.map.setZoom(14);
    },
    setMark() {
      _.each(this.locationlist, item => {
        this.map.addOverlay(
          new BMap.Marker(new BMap.Point(item.lng, item.lat))
        );
      });
      this.markList = _.map(this.locationlist, item => {
        return new BMap.Marker(new BMap.Point(item.lng, item.lat));
      });
    },
    getInfor(e) {
      console.log(e);
      var opts = {
        width: 200, // 信息窗口宽度
        height: 100, // 信息窗口高度
        title: "海底捞王府井店", // 信息窗口标题
        enableMessage: true, //设置允许信息窗发送短息
        message: "亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
      };
      var infoWindow = {};
      return (infoWindow = new BMap.InfoWindow(
        "地址：北京市东城区王府井大街88号乐天银泰百货八层",
        opts
      )); // 创建信息窗口对象
    },
    addRuler() {
      MYDIS = new BMapLib.DistanceTool(MAP);
      MAP.addEventListener("load", function() {
        MYDIS.open();
>>>>>>> c55787a82fa67ea23628bef3aaedfb351dc4b8cc
      });
    }
  }
};
</script>

<style lang="less">
.test-page {
<<<<<<< HEAD
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
=======
  .BdMap {
    height: 500px;
    width: 100%;
>>>>>>> c55787a82fa67ea23628bef3aaedfb351dc4b8cc
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
