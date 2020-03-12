// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import app from './components/app';
import router from './routes';
import store from './store';
import VueRouter from 'vue-router';
import eventHub from '@/plugins/event-hub';
import iView from 'view-design';
import 'view-design/dist/styles/iview.css';
import axios from './utils/request';
import './assets/font/iconfont.css';
// import { Message } from 'iview';
// Vue.prototype.$Message = Message;
import directives from './directives/index';
import VideoPlayer from 'vue-video-player';
// require('videojs-contrib-hls/dist/videojs-contrib-hls');
import 'videojs-contrib-hls';
// import BaiduMap from 'vue-baidu-map';

require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.use(eventHub);
Vue.use(iView);
Vue.use(VueRouter);
Vue.use(directives);
Vue.use(VideoPlayer);
// Vue.use(BaiduMap, {
//   ak: '0FffThrSk3U6GEGEIvDXciFk5tGrQpyC'
// });

const debug = process.env.NODE_ENV !== 'production';
Vue.config.debug = debug;
Vue.config.devtools = debug;
Vue.config.productionTip = debug;
// router.beforeEach((to, from, next) => {
//   const role = localStorage.getItem('ms_user');
//   if (!role && to.path !== '/login') {
//     next('/login');
//   } else {
//     next();
//   }
// });
window._vueInstance = new Vue({
  debug,
  el: '#app',
  components: { app },
  template: '<app/>',
  store,
  router
});
