<template>
  <form
    action="#"
    class="border p-5 needs-validation"
    @submit.prevent="onSignin"
  >
    <h2 class="display-3 mb-3 text-center">
      Sign in
    </h2>
    <p class="mb-5 text-muted text-center">
      Sign in is Required.
    </p>
    <div class="form-floating mb-3">
      <input
        id="sign-in-email"
        v-model="email"
        name="signin-email"
        class="form-control"
        placeholder="example@exmaple.com"
      >
      <label for="sign-in-email">Email</label>
    </div>
    <div class="form-floating mb-3">
      <input
        id="sign-in-pwd"
        v-model="pwd"
        type="password"
        name="signin-pwd"
        class="form-control"
        placeholder="input your password"
      >
      <label for="sign-in-pwd">Password</label>
    </div>
    <button
      class="btn btn-dark btn-lg d-block w-100"
    >
      <i class="bi bi-box-arrow-in-right" />
      <span> Enter </span>
    </button>
  </form>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import { string as yupString } from 'yup'

const emit = defineEmits(['submit', 'alert'])

//  vee-validate setup
const { handleSubmit } = useForm()

//  validation rules
const { value: email } = useField('signin-email', yupString().required('Email is required.').email('Check your email address, It\'s wrong type'))
const { value: pwd } = useField('signin-pwd', yupString().required('Password is required.').min(4, 'Password is over 4 characters.').max(16, 'Password is under 16 characters.'))

//  submit
const onSignin = handleSubmit(() => {
  //  export as object to submit
  const formData = { email, pwd }
  emit('submit', formData)
}, ({ errors }) => {
  //  on invalid
  const errorMessage = Object.values(errors)
  if (errorMessage.length > 0) {
    emit('alert', `[Sign In] ${errorMessage[0]}`)
  }
})
</script>

<style lang="scss" scoped>

</style>
