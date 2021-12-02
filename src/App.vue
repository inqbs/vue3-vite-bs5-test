<template>
  <div>
    <header class="header">
      <MyHeader />
    </header>
    <main class="container">
      <router-view v-slot="{Component}">
        <transition
          name="fade"
          mode="out-in"
          type="transition"
          :duration="150"
        > 
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'

export default {
  components: {
    MyHeader
  }
}
</script>

