
export default {
  name: 'test',
  directive: {
    bind(el, { value, name }, vnode) {
      // el._dragInstance = new Drag(el, value || {});
      // console.log(value);
      console.log(name);
    },
    unbind(el) {
      // el._dragInstance && el._dragInstance.destory();
    }
  }
};
