// import _ from "lodash";

// class SubEventsManager {
//   eventHub = null;
//   _events = {};
//   constructor(eventHub) {
//     this.eventHub = eventHub;
//   }
//   addEvent(events, callback) {
//     _.each(_.flatten(_.compact([events])), event => {
//       if (!this._events[event]) {
//         this._events[event] = [];
//       }
//       this._events[event].push(callback);
//     });
//   }
// }
// export default {
//   install(Vue, options) {
//     const eventHub = new Vue();
//     Vue._eventHub = eventHub;
//     Vue.prototype.$pub = (...args) => {
//       eventHub.$emit.apply(eventHub, _.toArray(args));
//       // Reflect.apply(eventHub.$emit, eventHub, _.toArray(args));
//     };
//     Vue.prototype.$sub = function (event, callback) {
//       this.$_subManager.addEvent(event, callback);
//       eventHub.$on(event, callback);
//     };
//     Vue.mixin({
//       created() {
//         // 创建了实例的全局事件管理器
//         if (!this.$_subManager) {
//           this.$_subManager = new SubEventsManager(eventHub);
//         }
//       }
//       // 在组件销毁时取消和本实例相关的所有全局监听器
//     });
//   }
// }
