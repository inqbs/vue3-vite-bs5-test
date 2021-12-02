export default [
  {
    name: 'home',
    path: '/',
    redirect: '/counter'
  },
  {
    name: 'Counter',
    path: '/counter',
    component: () => import('@/pages/Counter.page.vue')
  },
  {
    name: 'Todo',
    path: '/todo',
    component: () => import('@/pages/Todo.page.vue')
  }
]
