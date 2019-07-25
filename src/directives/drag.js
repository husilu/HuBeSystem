class Drag {
  isDraging = false
  elx = 0
  ely = 0
  target = null // 拖拽目标
  handler = null// 拖拽触发点
  callbacks = {
    onDragEnd: null,
    onDragStart: null,
    onDrag: null
  }
  constructor(el, { target, handler, callbacks = {} }) {
    if (target) { this.target = el.querySelector(target); } else { this.target = el; }

    if (handler) { this.handler = el.querySelector(handler); } else { this.handler = this.target; }
    this.callbacks = callbacks;
    this.bindEvents();
  }
  bindEvents() {
    const el = this.target;
    this.handler.addEventListener('mousedown', ev => {
      console.log(ev);
      if (ev.which === 1) {
        this.isDraging = true;
        this.elx = ev.pageX - el.offsetLeft; // pageX以页面左上角开始 offsetLeft获取当前元素边缘尺寸
        this.ely = ev.pageY - el.offsetTop;
        this.callbacks.onDragStart && this.callbacks.onDragStart(ev, this.elx, this.ely);
      }
    });
    el.addEventListener('mouseup', ev => {
      {
        this.isDraging = false;
        const pos = this._getPosFromEvent(ev); // 距离浏览器边框的位置
        this.callbacks.onDragEnd && this.callbacks.onDragEnd(ev, pos.x, pos.y);
      }
    });
    window.addEventListener('mousemove', this._dragHandler.bind(this));
  }
  _dragHandler(ev) {
    if (!this.isDraging) return;
    const pos = this._getPosFromEvent(ev);
    this.callbacks.onDrag && this.callbacks.onDrag(ev, pos.x, pos.y);
    this._positionTo(pos.x, pos.y);
    ev.preventDefault();
    return false;
  }
  _getPosFromEvent(ev) {
    return { x: ev.clientX - this.elx, y: ev.clientY - this.ely }; // 会随着滚动条改变而改变
  }
  _positionTo(x, y) {
    this.target.style.left = x + 'px';
    this.target.style.top = y + 'px';
  }
  destroy() {
    window.removeEventListener('mousemove', this._dragHandler);
  }
}
export { Drag };
export default {
  name: 'cpt-drag',
  directive: {
    bind(el, { value }) {
      // console.log(value);
      el._dragInstance = new Drag(el, value || {});
    },
    unbind(el) {
      el._dragInstance && el._dragInstance.destory();
    }
  }
};
