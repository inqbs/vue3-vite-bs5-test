export default [
  {
    name: 'Main',
    path: '/',
    redirect: '/counter'
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/pages/Login.page.vue')
  },
  {
    name: 'Counter',
    path: '/counter',
    component: () => import('@/pages/Counter.page.vue'),
    meta: {
      requiredLoggedIn: true
    }
  },
  {
    name: 'Todo',
    path: '/todo',
    component: () => import('@/pages/Todo.page.vue'),
    meta: {
      requiredLoggedIn: true
    }
  },
  {
    name: 'Form',
    path: '/form',
    component: () => import('@/pages/Form.page.vue'),
    meta: {
      requiredLoggedIn: true
    }
  }
]
