import VueRouter from 'vue-router';
import _ from 'lodash';
let routes = [];
// 动态引入router 遍历该文件夹下所有的非index.js文件
const contexts = require.context('./', true, /\.js$/);
contexts.keys().forEach((key) => {
  const modRoutes = contexts(key).default;
  if (!key.includes('index') && _.isArray(modRoutes)) {
    routes = routes.concat(modRoutes);
  }
});
const router = new VueRouter({ routes });
// router.beforeEach((to, from, next) => {
//   router.app.$Message.loading('页面加载中...', 0);
//   next();
// });
// router.afterEach(() => {
//   router.app.$Message.destroy();
// });
export default router;
