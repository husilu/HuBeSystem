<template>
  <div class="test-page">
    <div id='BdMap' class='BdMap'></div>
    <Button @click='moveMap'>移动地图</Button>
    <Button @click='scaleMap'>缩放地图</Button>
    <Button @click='setMark'>设置标签</Button>
    <Button @click='getInfor'>获取信息窗口</Button>
    <Button @click='addRuler'>获取尺子</Button>
  </div>
</template>

<script>
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
      });
    }
  }
};
</script>

<style lang="less">
.test-page {
  .BdMap {
    height: 500px;
    width: 100%;
  }
}
</style>
