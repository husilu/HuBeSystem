<template lang="pug">
  Modal.xxgl-nrgl-qr(v-model='visible' :title='title')
    canvas(id="canvas" width="300" height="300" v-hsl-code:[codedata]='' v-if='visible')
    //- span {{codedata}}
    //- canvas(id="imgcanvas" style="display:none")
    div(slot='footer')
      a.mr1(@click='okHandler' :href='downloadUrl' download='code') 下载
      Button(type='default' @click='cancelHandler') 取消
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
  watch: {
  },
  methods: {
    show(row) {
      this.visible = true;
      this.codedata = row;
    },
    okHandler() {
      let wrapCanvas = convertCanvasToImage(document.getElementById("canvas"));
      this.downloadUrl = wrapCanvas.getAttribute("src");
      // console.log(this.downloadUrl);
      // document.getElementById('link').click();
      // window.location.href = this.downloadUrl;
    },
    cancelHandler() {
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
  .mr1 {
    margin-right: 5px;
  }
}
</style>
