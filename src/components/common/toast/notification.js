/* eslint-disable */
import vue from 'vue';

import toastComponent from './toast.vue';

const ToastConstructor = vue.extend(toastComponent); // ToastConstructor是vue实例的一个构造函数 可以给这个构造函数传参 创建实例  并且将这个实例挂载到某个元素里面

// 总结一下   因为extend可以返回一个vue实例的构造函数，所以我们得到这个vue实例，利用vue.extend得到这个实例的构造函数，然后可以传参生成新的实例，然后挂载到其他dom中 
function showToast(text, duration) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data() {
      return {
        text: text,
        show: true
      }
    }
  })
  document.body.appendChild(toastDom.$el) // 这里我们将该实例挂载到了body里面
  setTimeout(() => { toastDom.show = false }, duration) // 过了 duration 时间后隐藏
  const toast = toastDom.$el;
  return {
    add(options) {
      toast.add(options)
    }
  }
}

// 注册为全局组件的函数
// function registryToast() {
//    // 将组件注册到 vue 的 原型链里去,
//   // 这样就可以在所有 vue 的实例里面使用 this.$toast()
//   vue.prototype.$toast = showToast
// }

export default showToast;
