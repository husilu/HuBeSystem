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
    // getImgCode() {
    //   var imgCanvas = document.getElementById("imgcanvas");
    //   QRCode.toCanvas(
    //     imgCanvas,
    //     "https://blog.csdn.net/weixin_42890953/article/details/82776760",
    //     function(error) {
    //       if (error) console.error(error);
    //       // console.log("QRCode success!");
    //     }
    //   );
    //   return imgCanvas;
    // },
    // getCode(row) {
    //   let imgCanvas = this.getImgCode();
    //   let img = convertCanvasToImage(imgCanvas);
    //   // let usecanvas = document.createElement('canvas');
    //   let canvas = document.getElementById("canvas");
    //   let ctx = canvas.getContext("2d");
    //   ctx.fillStyle = "#fff";
    //   ctx.fillRect(0, 0, 300, 300);
    //   img.onload = function() {
    //     ctx.drawImage(img, 50, 110, 168, 168);
    //   };
    //   ctx.fillStyle = "#000";
    //   ctx.font = "16px Arial";
    //   ctx.fillText("姓名    " + row.name, 10, 20);
    //   ctx.fillText("年龄    " + row.age, 10, 45);
    //   ctx.fillText("性别    " + row.sex, 10, 70);
    //   ctx.fillText("住址    " + row.address, 10, 95);
    //   ctx.stroke();
    // }
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
