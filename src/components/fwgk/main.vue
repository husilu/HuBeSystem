<template lang="html">
  <div>
    <!-- <video src="http://221.10.172.117:7086/live/cameraid/1000006%240/substream/1.m3u8" width="300" height="400">
    </video> -->
    <!-- <myvideo></myvideo>
     -->
    <video ref="videoRef" width="400" controls></video>
    <child1></child1>
    <child2></child2>
    <ztgg></ztgg>
    <span>服务概况视频显示</span>
  </div>
</template>

<script>
import Hls from "hls.js";
import myvideo from "./myvideo";
import edit from "./edit";
import { mapGetters } from "vuex";
import { GETTER_COLUMNS } from "store/fwgk/index";
// import _ from "lodash";
let components = [];
let componentsObj = {};
// 动态引入router 遍历该文件夹下所有的非index.js文件
const contexts = require.context("./", false, /\.vue$/); // 返回的是一个函数 并且该函数有3个方法
contexts.keys().forEach(key => {
  // keys返回匹配成功模块的名字组成的数组
  // console.log(key);
  if (key !== "./main.vue") {
    components.push(contexts(key).default);
  }
});
components.forEach(key => {
  if (key.__file) {
    let name = key.__file.replace(/(.*\/)*([^.]+).*/gi, "$2");
    componentsObj[name] = key;
  }
});
export default {
  components: { edit, myvideo, ...componentsObj },
  computed: {
    ...mapGetters({
      columns: GETTER_COLUMNS
    })
  },
  mounted: function() {
    var hls = new Hls();
    hls.loadSource(
      "http://221.10.172.117:7086/live/cameraid/1000006%240/substream/2.m3u8"
    );
    // let timer = setInterval(() => {
    //   console.log("interval");
    // }, 200);
    // this.$once("hook:beforeDestory", () => {
    //   clearInterval(timer);
    // });
    // hls.attachMedia(this.$refs.videoRef);
    // hls.on(Hls.Events.MANIFEST_PARSED, function() {
    //   this.$refs.videoRef.play();
    // });
  },
  beforeDestroy() {
    console.log("beforeDestroy");
    // console.log(this.$refs.videoRef);
    // this.$refs.videoRef.dispose();
  },
  methods: {
    openModal() {
      this.$refs.edit.openModal();
    }
  }
};
</script>

<style lang="less">
</style>
