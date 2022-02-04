<template>
  <div class="container">
    <div class="row my-5">
      <div class="col col-12">
        <SignInForm
          id="signin-form"
          @alert="onAlert"
          @submit="onSubmit"
        />
      </div>
    </div>
    <teleport to="#alert">
      <MyAlert
        :message="alertMsg"
        @close="onAlert()"
      />
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'

import SignInForm from '@/components/form/SignInForm.vue'
import MyAlert from '@/components/MyAlert.vue'

//  alert
const alertMsg = ref('')
const onAlert = (msg = '') => {
  alertMsg.value = msg
}

//  login
const router = useRouter()
const authStore = useAuthStore()

const onSubmit = ({ email, pwd }) => {
  const username = email.value
  const password = pwd.value
  authStore.login({ username, password })
  onAlert(`Welcome ${username}`)
  router.push({ name: 'Main' })
}
</script>

<style lang="scss" scoped>

</style>

<route lang="yaml">
name: Login
</route>
