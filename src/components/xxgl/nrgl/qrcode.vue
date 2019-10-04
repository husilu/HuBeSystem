<template lang="pug">
  Modal.xxgl-nrgl-qr(v-model='visible' :title='title' ok-text='下载' @on-cancel='cancelHandler')
    canvas(id="canvas" width="300" height="300" v-hsl-code:[codedata]='' v-if='visible')
    //- span {{codedata}}
    //- canvas(id="imgcanvas" style="display:none")
    //- div(slot='footer')
    //-   a(:href='downloadUrl' download = 'test')
    //-     Button(type='primary' @click='okHandler') 下载
    //-   Button(type='default' @click='cancelHandler') 取消
</template>

<script>
// import QRCode from "qrcode";

function convertCanvasToImage(canvas) {
  var image = new Image();
  // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持
  // 指定格式 PNG
  image.src = canvas.toDataURL("image/png");
  return image;
}
export default {
  name: "QrCode",
  data() {
    return {
      visible: false,
      title: "下载二维码",
      downloadUrl: "",
      codedata: {}
    };
  },
  methods: {
    show(row) {
      this.visible = true;
      this.codedata = row;
    },
    okHandler() {
      let wrapCanvas = convertCanvasToImage(document.getElementById("canvas"));
      this.downloadUrl = wrapCanvas.getAttribute("src");
    },
    cancelHandler() {
      // let img = document.getElementById("canvas");
      // let can = document.getElementById("canvas");
      // // let imgcxt = document.getElementById("imgcanvas").getContext("2d");
      // let cxt = document.getElementById("canvas").getContext("2d");
      // // imgcxt.clearRect(0, 0, img.width, img.height);
      // cxt.clearRect(0, 0, can.width, can.height);
      this.visible = false;
    }
  }
};
</script>

<style lang="less">
.xxgl-nrgl-qr {
  .ivu-modal {
    .ivu-modal-body {
      text-align: center;
    }
  }
}
</style>
