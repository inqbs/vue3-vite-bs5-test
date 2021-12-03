<template>
  <header class="header fixed-top">
    <MyHeader />
  </header>
  <div class="header-top-fix" />
  <main>
    <router-view v-slot="{Component}">
      <transition
        name="fade"
        mode="out-in"
        type="transition"
        :duration="150"
      > 
        <component
          :is="Component"
          @alert="showAlert"
        />
      </transition>
    </router-view>
  </main>
</template>

<script>
import {ref} from 'vue'

import MyHeader from '@/components/MyHeader.vue'
import MyAlert from '@/components/MyAlert.vue'

export default {
  components: {
    MyHeader,
    MyAlert,
  },
  setup(){
    const message = ref('')
    const showAlert = (msg) => (message.value = msg)

    return {
      message,
      showAlert,
    }
  }
}
</script>

<style lang="scss" scoped>
.header-top-fix {
    display: block;
    position: relative;
    height: $spacer * 3;
}
</style>
