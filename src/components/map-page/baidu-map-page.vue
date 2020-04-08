
<template>
  <div class="baidu-map" id="baidu-map">
    <div id="map"></div>
    <Button @click="animate">动画</Button>
    <Button @click="movebox(1)">动画1</Button>
    <Button @click="movebox(2)">动画2</Button>
    <div class="line-box" ref="linebox">
      <span class="line" v-if="showLine" ref="line"></span>
    </div>
    <div :class="{activeClass: content === 1}" class="info">内容1</div>
    <div :class="{activeClass: content === 2}" class="info">内容2</div>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
// import BMap from "BMap";
import _ from "lodash";
import styleJson from "@/assets/static/custom_map_config.json";
import { obj, name } from './test';
import getName from './test';
export default {
  data() {
    return {
      content: 0,
      showLine: true,
      showMap: false,
      pointArray: [
        { lng: 104.07187106686754, lat: 30.653228246683764, show: false },
        { lng: 104.07240555864598, lat: 30.653208829642583, show: false },
        { lng: 104.07213157546545, lat: 30.652812721142777, show: false }
      ],
      pine: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // legend: {
        //   orient: "vertical",
        //   x: "left",
        //   data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        // },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "12",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      },
      pineChart: {}
    };
  },
  mounted() {
    // this.createMap();
    // console.log(getName)
    getName();
  },
  methods: {
    animate() {
      this.showLine = true;
      this.$refs.linebox.style.width = "10px";
      this.$refs.linebox.style.opacity = "1";
    },
    movebox(val) {
      // console.log(val);
      this.content = val;
    },
    createMap() {
      let that = this;
      // 创建Map实例
      var map = new BMap.Map("map", { mapType: BMAP_SATELLITE_MAP });
      // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(
        new BMap.Point(104.07275365203115, 30.653814763967404),
        19
      );
      //添加地图类型控件
      // map.setMapType({mapType:BMAP_HYBRID_MAP});
      //开启鼠标滚轮缩放
      // var top_left_navigation = new BMap.NavigationControl(); // 左上角，添加比例尺
      // map.addControl(top_left_navigation);
      // map.enableScrollWheelZoom(true);
      var myIcon = new BMap.Icon(
        "data:image/jpeg;base64,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",
        new BMap.Size(30, 30)
      );
      map.addEventListener("click", function(e) {
        // console.log(map.pointToOverlayPixel({point:e.point}))
        // console.log(map.pointToPixel({point:e.point}))
        console.log(e);
        // map.pointToPixel({point:e.point})
      });
      for (var i = 0; i < this.pointArray.length; i++) {
        var point = new BMap.Point(
          this.pointArray[i].lng,
          this.pointArray[i].lat
        );
        // var marker = new BMap.Marker(point, { icon: myIcon });
        // // map.addOverlay(marker);
        // var label = new BMap.Label(`point${i}`, {
        //   offset: new BMap.Size(20, -20)
        // });
        // marker.setAnimation(BMAP_ANIMATION_BOUNCE);
        // marker.setLabel(label);
      }
      var polygon = new BMap.Polygon(
        [
          new BMap.Point(this.pointArray[0].lng, this.pointArray[0].lat),
          new BMap.Point(this.pointArray[1].lng, this.pointArray[1].lat),
          new BMap.Point(this.pointArray[2].lng, this.pointArray[2].lat)
        ],
        {
          strokeColor: "red",
          strokeWeight: 2,
          strokeOpacity: 1,
          strokeStyle: "dashed"
        }
      );
      map.addOverlay(polygon);
      var marker = new BMap.Marker(polygon.getBounds().getCenter());
      var bounds = new BMap.Bounds(
        new BMap.Point(this.pointArray[2].lng, this.pointArray[2].lat),
        new BMap.Point(this.pointArray[0].lng, this.pointArray[0].lat)
      );
      map.addOverlay(bounds);
      // console.log(bounds.getCenter());
      var jxMarker = new BMap.Marker(bounds.getCenter());
      map.addOverlay(jxMarker);
      var copy = new BMap.CopyrightControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT
      });
      map.addOverlay(copy);
      // console.log(map.getCopyrightCollection());
      // console.log(marker);
      var circle = new BMap.Circle(
        new BMap.Point(this.pointArray[0].lng, this.pointArray[0].lat),
        100,
        {
          strokeColor: "red"
        }
      );
      // map.addOverlay(circle);
      marker.addEventListener("click", function(e) {
        that.$refs.info.style = "transform: translateX(-200px)";
      });
      map.addOverlay(marker);
      // console.log()
      var myPixel = map.pointToPixel(marker.point);
      // console.log(myPixel);
      var div = document.createElement("div");
      div.style.width = "100px";
      div.style.height = "100px";
      div.style.position = "absolute";
      div.style.top = `${myPixel.y}px`;
      div.style.left = `${myPixel.x}px`;
      div.style.transform = `translateY(-120px)`;
      // div.style.background = "#fff";
      div.setAttribute("id", "pine");
      document.getElementById("baidu-map").appendChild(div);
      this.initPine();
      // console.log(marker);
      // console.log(map.pointToPixel(marker.point));
    },
    showPoint(e) {
      console.log(e);
      console.log(e.point.lng + ", " + e.point.lat);
      // console.log();
    },
    initPine() {
      this.pineChart = echarts.init(document.getElementById("pine"));
      let pineChartOption = {
        tooltip: this.pine.tooltip,
        legend: this.pine.legend,
        series: this.pine.series
      };
      this.pineChart.setOption(pineChartOption);
    },
    showMarker() {}
  }
};
</script>

<style lang="less">
.baidu-map {
  position: relative;
  overflow: hidden;
  .info {
    transition: transform 2s;
    position: absolute;
    right: -200px;
    top: 30px;
    width: 200px;
    height: 500px;
    background-color: red;
  }
  .activeClass {
    transform: translateX(-200px);
  }
  .BMap_cpyCtrl {
    display: none;
  }
  .anchorBL {
    display: none;
  }
  #map {
    width: 100%;
    height: 600px;
  }
  .line-box {
    width: 0px;
    transition: width 3s;
    opacity: 0;
    .line {
      width: 20px;
      height: 1px;
      background-color: red;
      display: inline-block;
      transform: rotate(135deg);
    }
  }
}
</style>
