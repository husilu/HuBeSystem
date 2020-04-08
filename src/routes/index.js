import VueRouter from 'vue-router';
import _ from 'lodash';
let routes = [];
// 动态引入router 遍历该文件夹下所有的非index.js文件
const contexts = require.context('./', true, /\.js$/); // 返回的是一个函数 并且该函数有3个方法
contexts.keys().forEach((key) => { // keys返回匹配成功模块的名字组成的数组
  const modRoutes = contexts(key).default; // 取出该文件中的default模块
  if (!key.includes('index') && _.isArray(modRoutes)) {
    routes = routes.concat(modRoutes); // concat 连接数组
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
