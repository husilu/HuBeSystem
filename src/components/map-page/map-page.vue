<template lang="pug">
  div.map-page
    div#allmap
    //- Button.my-button(type='default' @click='') 绘画按钮测试
    //- Button.my-button2(type='default' @click='changeCenter') 复原地图
    Button.my-button2(type='default' @click='chooseMark') 选择标记
    Button.my-button(type='default' @click='clearMark') 清除标记
    list(:style="showNjDetail?'display:block;left:50px;':''")
</template>
<script>
import list from "./list";
import _ from "lodash";
import google from "google";
import { setTimeout } from "timers";
const T = google.maps;
export default {
  name: "MapPage",
  components: {
    list
  },
  data() {
    return {
      map: {},
      marker: {},
      showNjDetail: false,
      subnum: [1, 2, 34],
      sites: [
        [
          { lat: 30.583694595977153, lng: 103.91952793121345, area: "A" },
          { lat: 30.578226543922902, lng: 103.91785423278816, area: "A" },
          { lat: 30.579076329007382, lng: 103.92497817993171, area: "A" }
        ],
        [
          { lat: 30.5850615608043, lng: 103.92802516937263, area: "B" },
          { lat: 30.58561573024304, lng: 103.93257419586189, area: "B" },
          { lat: 30.580665037666257, lng: 103.93154422760017, area: "B" }
        ]
      ],
      markerSites: [
        { lat: 30.583694595977153, lng: 103.91952793121345 },
        { lat: 30.578226543922902, lng: 103.91785423278816 },
        { lat: 30.579076329007382, lng: 103.92497817993171 }
      ],
      mark: { lat: 30.584507388197554, lng: 103.91626636505134 },
      markersArray: [],
      arr: []
    };
  },
  async mounted() {
    if (google) {
      await this.initMap();
      await this.setMarket();
      // await this.setRectangle();
    }
  },
  methods: {
    chooseMark() {
      let position = this.mark;
      let marker = new google.maps.Marker({
        position,
        zIndex: 0,
        map: this.map
      });
      var infowindow = new google.maps.InfoWindow({
        content: `${marker.position}`,
        position
      }); // 标记的介绍文本
      // marker.addListener("click", function(event) {
      setTimeout(() => {
        infowindow.open(this.map, marker);
      }, 500);
      // });
    },
    changeCenter() {
      this.map.setCenter(this.myCenter);
      this.map.setZoom(15);
      console.log(this.map.getBounds());
    },
    initMap() {
      var myCenter = {
        lat: "30.58",
        lng: "103.92"
      };
      this.myCenter = {
        lat: 30.58,
        lng: 103.92
      };
      var myLatLng = new T.LatLng(myCenter.lat, myCenter.lng); // 创建经纬度对象
      this.map = new T.Map(document.getElementById("allmap"), {
        zoom: 15,
        // maxZoom: 15,
        // minZoom: 10,
        featureType: "all",
        stylers: [
          {
            color: "#C0C0C0"
          }
        ],
        center: myLatLng,
        // disableDefaultUI: true, // 取消默认的试图
        navigationControl: true, // true表示显示控件
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.DEFAULT
        },
        // mapTypeControl: false,
        mapTypeId: google.maps.MapTypeId.HYBRID,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT,
          style: google.maps.NavigationControlStyle.SMALL
        },
        gestureHandling: "greedy",
        language: "zh_cn",
        disableDoubleClickZoom: true // 禁用双击放大地图,
      });
      this.DrawManager();
      this.drawArea(this.sites);
      // this.map.setMinZoom(13);
      this.map.addListener("click", event => {
        console.log(event.latLng.lat());
        console.log(event.latLng.lng());
      });
      google.maps.event.addListener(this.map, "bounds_changed", eve => {});
      google.maps.event.addListener(this.map, "dragend", eve => {
        // this.map.setCenter(this.myCenter);
      });
    },
    setMarket() {
      // const bounds = new google.maps.LatLngBounds();
      // console.log(bounds);
      _.forEach(this.markerSites, position => {
        let marker = new google.maps.Marker({
          position,
          zIndex: 0,
          map: this.map
        });
        var infowindow = new google.maps.InfoWindow({
          content: `${marker.position}`
        }); // 标记的介绍文本
        marker.addListener("click", function(event) {
          infowindow.open(this.map, marker);
        });
        this.markersArray.push(marker);
        // bounds.extend(marker.position);
      });
    },
    showposition(event) {
      // 创建一个信息窗口
      var infoWindowPoly = new google.maps.InfoWindow(); // 弹出框
      var contentString = "<b>该处地址</b><br />";
      contentString +=
        "点击位置: <br />" +
        event.latLng.lat() +
        "," +
        event.latLng.lng() +
        "<br />";
      infoWindowPoly.setContent(contentString); // 设置内容
      infoWindowPoly.setPosition(event.latLng); // 设置位置
      infoWindowPoly.open(this.map); // 挂载到地图上面
      this.showNjDetail = true;
    },
    setRectangle() {
      var rectangle = new google.maps.Rectangle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: this.map,
        bounds: {
          north: 30.583214306461983,
          south: 30.584433498277303,
          east: 103.91467849731453,
          west: 103.93626491546638
        }
      });
      rectangle.setMap(this.map);
    },
    makeInfoWindow() {
      // var infoWindow = new google.maps.InfoWindow({
      //   content: 'string',
      // });
    },
    DrawManager() {
      // console.log(google.maps.drawing.OverlayType);
      this.drawingManager = new google.maps.drawing.DrawingManager({
        // 绘制多边形
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: ["polygon"]
        },
        // markerOptions: { icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png' },
        polygonOptions: {
          strokeColor: "red",
          fillColor: "red",
          fillOpacity: 0.6,
          strokeWeight: 3,
          clickable: false,
          editable: true,
          strokeStyle: "dashed",
          zIndex: 1
        }
      });
      let drawingManager = this.drawingManager;
      drawingManager.setMap(this.map);
      drawingManager.addListener(
        "overlaycomplete",
        this.overlaycomplete,
        event
      );
      // let infoWindow = new google.maps.InfoWindow();
      drawingManager.addListener("click", event => {
        console.log("cc");
      });
    },
    // overlaycomplete(event) {
    //   console.log(event);
    //   let newShape = event.overlay;
    //   // console.log(event);
    //   google.maps.event.addListener(
    //     newShape.getPath(),
    //     "insert_at",
    //     function() {
    //       let array = newShape.getPath().getArray();
    //       console.log(array);
    //     }
    //   );
    // },
    clearMark() {
      // this.map.clearOverlays();
      // this.markersArray.setMap(null);
      _.forEach(this.markersArray, item => {
        item.setMap(null);
      });
    },
    getSite(event) {
      console.log(event);
    },
    showLonLat(event) {
      let obj = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      this.$pub("change-list", obj);
      this.showNjDetail = true;
    },
    drawArea(list) {
      // 绘制区域
      _.forEach(list, (item, index) => {
        let arr = [];
        item.map(ele => {
          arr.push({
            lat: ele.lat,
            lng: ele.lng
          });
        });
        let bermudaTriangle = new google.maps.Polygon({
          paths: arr,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "red",
          fillOpacity: 0.55
          // draggable: true
        });
        bermudaTriangle.setMap(this.map);
        let infoWindow = new google.maps.InfoWindow();
        bermudaTriangle.addListener("click", event => {
          infoWindow.setContent(index + "区域");
          infoWindow.setPosition(event.latLng);
          infoWindow.open(this.map);
          this.showLonLat(event);
        });
      });
    }
  }
};
</script>
<style lang='less'>
.map-page {
  position: relative;
  #allmap {
    width: 1300px;
    height: 800px;
  }
  .my-button {
    position: absolute;
    top: 20px;
    left: 30px;
  }
  .my-button2 {
    position: absolute;
    top: 20px;
    left: 150px;
  }
}
</style>
