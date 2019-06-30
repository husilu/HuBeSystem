
export default [{
  path: '/',
  component: () => import('@/components/home/home'),
  redirect: '/dashboard',
  children: [
    {
      path: '/dashboard',
      component: () => import('@/components/dashboard/dashboard'),
      meta: { title: 'dashboard' }
    },
    {
      path: '/fwgk',
      component: () => import('@/components/fwgk/main'),
      meta: { title: 'fwgk' }
    },
    {
      path: '/jgzx-fwdd',
      component: () => import('@/components/jgzx/fwdd/fwdd'),
      meta: { title: 'jgzx-fwdd' }
    },
    {
      path: '/jgzx-fwxm',
      component: () => import('@/components/jgzx/fwxm'),
      meta: { title: 'jgzx-fwxm' }
    },
    {
      path: '/jgzx-fwxq',
      component: () => import('@/components/jgzx/fwxq'),
      meta: { title: 'jgzx-fwxq' }
    },
    {
      path: '/xxgl-nrgl',
      component: () => import('@/components/xxgl/nrgl'),
      meta: { title: 'xxgl-nrgl' }
    },
    {
      path: '/xxgl-tjgl',
      component: () => import('@/components/xxgl/tjgl'),
      meta: { title: 'xxgl-tjgl' }
    },
    {
      path: '/test-page',
      component: () => import('@/components/test-page/test-page'),
      meta: { title: 'test-page' }
    },
    {
      path: '/xxzx-byxx',
      component: () => import('@/components/xxzx/byxx'),
      meta: { title: 'xxzx-byxx' }
    },
    {
      path: '/xxzx-zssj',
      component: () => import('@/components/xxzx/zssj'),
      meta: { title: 'xxzx-zssj' }
    }
  ]
}];
// export default dashboard;
