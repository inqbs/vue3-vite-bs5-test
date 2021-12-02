<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
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
        <li class="nav-item">
          <router-link
            to="/counter"
            class="nav-link"
            active-class="active"
          >
            counter
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/todo"
            class="nav-link"
            active-class="active"
          >
            todo
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import logoImg from '@/assets/images/logo.png'
</script>

<style lang="scss" scoped>

</style>