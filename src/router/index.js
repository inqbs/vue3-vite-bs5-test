import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'

import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  const isPrevLoggedIn = authStore.isParseInfoRequired
  if (isPrevLoggedIn) {
    authStore.parseInfo()
  }

  switch (true) {
    //  is login required
    case (to.meta.requiredLoggedIn && !authStore.isLoggedIn):
      return next('/login')
    default:
      next()
  }
})

export default router
