import QRCode from "qrcode";
class Code {
  constructor(el, obj) {
    this.el = el;
    this.obj = obj;
    for (let item in obj) {
      this[item] = obj[item];
    }
    this._getImgCode();
  }
  _getImgCode() {
    var imgCanvas = document.createElement("canvas");
    let ctx = this.el.getContext("2d");
    this.ctx = ctx;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, 300, 300);
    this.imgObj = imgCanvas;
    if (this.obj.url && ctx) {
      QRCode.toCanvas(
        imgCanvas,
        this.obj.url,
        function (error) {
          if (error) console.error(error);
          // console.log("QRCode success!");
        }
      );
      var image = new Image();
      image.src = imgCanvas.toDataURL("image/png");
      image.onload = function () {
        ctx.drawImage(image, 50, 110, 168, 168);
      };
    }
    ctx.font = "16px Arial";
    ctx.fillStyle = "#000";
    let x = 10;
    let y = 20;
    Object.keys(this.obj).forEach(key => {
      if (key.indexOf('_') === -1) {
        ctx.fillText(`${key}:   ` + this.obj[key], x, y);
      }
      y = y + 30;
    });
    ctx.stroke();
  }
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.imgObj.width, this.imgObj.height);
  }
}

export { Code };
export default {
  name: 'hsl-code',
  directive: {
    bind(el, binding, vnode) {
      el._codeInstance = new Code(el, binding.arg || {});
    },
    unbind(el) {
    },
    update(el, binding, vnode) {
      if (el._codeInstance) {
        el._codeInstance.clearCanvas();
      }
      if (binding.arg) {
        el._codeInstance = new Code(el, binding.arg || {});
        // console.log(el);
      }
    }
  }
};
