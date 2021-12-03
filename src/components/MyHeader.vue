<template>
  <nav class="navbar navbar-expand navbar-light bg-white border-bottom">
    <div class="container-fluid">
      <h1 class="navbar-brand mb-0">
        <img
          :src="logoImg"
          alt="로고"
          width="32"
        >
        <span>
          Vite + Vue3 + BS5 Test
        </span>
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
    </div>
  </nav>
</template>

<script setup>
import logoImg from '@/assets/images/logo.png'
import routes from '@/router/routes.js'

const menuList = routes.filter(it=>!!it.component)
</script>

<style lang="scss" scoped>

</style>