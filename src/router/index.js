import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'

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
    // is login required
    case (to.meta.requiresAuth && !authStore.isLoggedIn):
      return next('/login')
    default:
      next()
  }
})

export default router
