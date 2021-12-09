<template>
  <nav class="navbar navbar-expand navbar-light bg-white border-bottom">
    <div class="container-fluid">
      <h1 class="navbar-brand mb-0">
        <router-link
          to="/"
          class="nav-link"
          active-class="active"
        >
          <img
            :src="logoImg"
            alt="로고"
            width="32"
          >
          <span class="text-dark">
            Vite + Vue3 + BS5 Test
          </span>
        </router-link>
      </h1>
      <ul class="navbar-nav me-auto">
        <li
          v-for="menu in menuList"
          :key="`menu-${menu.name}`"
          class="nav-item"
        >
          <router-link
            :to="menu.path"
            class="nav-link"
            active-class="active"
          >
            {{ menu.name }}
          </router-link>
        </li>
      </ul>
      <div
        v-if="isLoggedIn"
        class="d-flex align-items-center"
      >
        <div class="mr-3">
          {{ username }}
        </div>
        <div>
          <button
            class="btn btn-dark"
            @click.prevent="logout"
          >
            <i class="bi bi-box-arrow-right" />
            Sign out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

import logoImg from '@/assets/images/logo.png'
import routes from '@/router/routes.js'

const router = useRouter()
const authStore = useAuthStore()

//  get menu list
const menuList = routes.filter(it => !!it.component).filter(it => it.path !== '/login')

//  logged account info
const username = computed(() => authStore.username)
const isLoggedIn = computed(() => authStore.isLoggedIn)

//  logout
const logout = async () => {
  await authStore.logout()
  router.push('/login')
}
</script>
