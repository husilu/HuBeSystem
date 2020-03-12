
export default {
  methods: {
    initMap() {
      var myLatLng = new google.maps.LatLng(myCenter.lat, myCenter.lng);
      this.map = new google.maps.Map(document.getElementById("allmap"), { // 创建一个地图
        zoom: 15,
        center: myLatLng,
        disableDefaultUI: true, // 取消默认的试图
        navigationControl: true, // true表示显示控件
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.DEFAULT
        },
        mapTypeId: google.maps.MapTypeId.HYBRID,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT,
          style: google.maps.NavigationControlStyle.SMALL
        },
        gestureHandling: "greedy",
        language: "zh_cn"
      });
      google.maps.event.addListener(this.map, "click", this.showPosition, event); // 地图点击事件
    },
    setLine() {
      let poly = new google.maps.Polyline({
        // 定义线的样式
        path: flightPlanCoordinates,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 8
      });
      poly.setMap(this.map);
    },
    showPosition(event) {
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
      // this.showNjDetail = true;
    },
    setMarket() {
      // const bounds = new google.maps.LatLngBounds();
      // console.log(bounds);
      _.forEach(this.sites, position => {
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
        // bounds.extend(marker.position);
      });
    }
  }
}