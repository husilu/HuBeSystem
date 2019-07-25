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
    console.log(this.el);
    let ctx = this.el.getContext("2d");
    console.log(this.obj);
    if (this.obj.url) {
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
      console.log(this.el);
      image.onload = function () {
        ctx.drawImage(image, 50, 110, 168, 168);
      };
    }
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
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
}

export { Code };
export default {
  name: 'hsl-code',
  directive: {
    bind(el, binding, vnode) {
      // console.log(binding.arg);
      el._codeInstance = new Code(el, binding.arg || {});
    },
    unbind(el) {
      // el._codeInstanc && el._codeInstance.destory();
    },
    update(el, binding, vnode) {
      // console.log(el);
      if (binding.arg) {
        el._codeInstance = new Code(el, binding.arg || {});
      }
    }
  }
};
