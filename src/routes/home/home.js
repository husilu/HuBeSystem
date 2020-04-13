
export default [{
  path: '/',
  component: () => import('@/components/home/home'),
  redirect: '/dashboard',
  children: [
    {
      path: '/dashboard',
      component: () => import('@/components/dashboard/dashboard'),
      meta: { title: 'dashboard' },
      name: 'dashboard'
    },
    {
      path: '/fwgk',
      component: () => import('@/components/fwgk/main'),
      meta: { title: '服务概况' },
      name: 'fwgk'
    },
    {
      path: '/jgzx-fwdd',
      component: () => import('@/components/jgzx/fwdd/fwdd'),
      meta: { title: 'jgzx-fwdd' },
      name: 'jgzx-fwdd'
    },
    {
      path: '/jgzx-fwxm',
      component: () => import('@/components/jgzx/fwxm'),
      meta: { title: 'jgzx-fwxm' },
      name: 'jgzx-fwxm'
    },
    {
      path: '/jgzx-fwxq',
      component: () => import('@/components/jgzx/fwxq'),
      meta: { title: 'jgzx-fwxq' },
      name: 'jgzx-fwxq'
    },
    {
      path: '/xxgl',
      meta: { title: '信息管理' },
      name: 'xxgl',
      component: () => import('@/components/xxgl/main'),
      children: [{
        path: 'nrgl',
        component: () => import('@/components/xxgl/nrgl.vue'),
        name: 'nrgl',
        meta: { title: '内容管理' }
      },
      {
        path: 'tjgl',
        component: () => import('@/components/xxgl/tjgl'),
        name: 'tjgl',
        meta: { title: '推荐管理' }
      }]
    },
    {
      path: '/test-page',
      component: () => import('@/components/test-page/test-page'),
      meta: { title: '测试页面' },
      name: 'test-page'
    },
    {
      path: '/map-page',
      component: () => import('@/components/map-page/baidu-map-page'),
      meta: { title: '百度地图' },
      name: 'baidu-map-page'
    },
    {
      path: '/xxzx',
      meta: { title: '学习中心' },
      name: 'xxzx',
      component: () => import('@/components/xxzx/main'),
      children: [
        {
          path: 'byxx',
          component: () => import('@/components/xxzx/byxx'),
          name: 'byxx',
          meta: { title: '本月学习' }
        },
        {
          path: 'zssj',
          component: () => import('@/components/xxzx/zssj'),
          name: 'zssj',
          meta: { title: '知识收集' }
        },
        {
          path: 'sjsj',
          component: () => import('@/components/xxzx/sjsj'),
          name: 'sjsj',
          meta: { title: '书籍收集' }
        }
      ]
    },
    {
      path: 'chart',
      component: () => import('@/components/chart/main'),
      name: 'chart',
      meta: { title: '图表' }
    }
  ]
}];
// export default dashboard;
