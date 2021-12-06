<template>
  <form
    action="#"
    class="border p-5 needs-validation"
    @submit.prevent="onSignin"
  >
    <h2 class="display-3 mb-3 text-center">
      Sign Up
    </h2>
    <p class="mb-5 text-muted text-center">
      Welcome to examaple.com
    </p>

    <div class="mb-3">
      <label
        for="signup-email"
        class="form-label"
      >
        Email</label>
      <input
        id="signup-email"
        v-model="email"
        name="signup-email"
        class="form-control"
        placeholder="example@exmaple.com"
        required
        :class="{'is-invalid': emailError}"
      >
      <span class="invalid-feedback">{{ emailError }}</span>
    </div>

    <div class="mb-3">
      <label
        for="signup-email"
        class="form-label"
      >Username</label>
      <input
        id="signup-email"
        v-model="username"
        name="signup-username"
        class="form-control"
        placeholder="example"
        required
        :class="{'is-invalid': usernameError}"
      >
      <span class="invalid-feedback">{{ usernameError }}</span>
    </div>

    <div class="mb-3">
      <label
        for="signup-pwd"
        class="form-label"
      >Password</label>
      <input
        id="signup-pwd"
        v-model="pwd"
        type="password"
        name="signup-pwd"
        class="form-control"
        placeholder="input your password"
        required
        :class="{'is-invalid': pwdError}"
      >
      <span class="invalid-feedback">{{ pwdError }}</span>
    </div>

    <div class="mb-3">
      <label
        for="signup-pwdc"
        class="form-label"
      >Password Confirm</label>
      <input
        id="signup-pwdc"
        v-model="pwdc"
        type="password"
        name="signup-pwdc"
        class="form-control"
        placeholder="input your password"
        required
        :class="{'is-invalid': pwdcError}"
      >
      <span class="invalid-feedback">{{ pwdcError }}</span>
    </div>

    <div class="mb-3">
      <label
        for="signup-pwd"
        class="form-label"
      >Birthday</label>
      <div class="mb-3">
        <date-picker
          ref="birthdayPicker"
          v-model="birthday"
          :columns="2"
          :available-dates="{end: new Date()}"
          @popover-will-show="moveSelectedDate"
        >
          <template #default="{inputValue, togglePopover}">
            <div class="input-group">
              <button
                type="button"
                class="btn btn-primary"
                @click.prevent="togglePopover"
              >
                <i class="bi bi-calendar3" />
              </button>
              <input
                id="signup-birthday"
                :value="inputValue"
                type="text"
                name="birthday"
                readonly
                class="form-control bg-white"
                @click.prevent="togglePopover"
              >
            </div>
          </template>
        </date-picker>
      </div>
    </div>

    <div class="mt-4">
      <button
        class="btn btn-dark btn-lg d-block w-100"
      >
        Join
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useForm, useField } from 'vee-validate'
import { string as yupString } from 'yup'

import { DatePicker } from 'v-calendar'

const emit = defineEmits(['submit', 'alert'])

//  data
const birthday = reactive(new Date())
const birthdayPicker = ref(null)

const moveSelectedDate = (e) => {
  console.log('moveSelectedDate is fired', e)
  birthdayPicker.value.move(birthday, {
    position: -1
  })
}

//  vee-validate setup
const { errors } = useForm()

//  validation rules
const { value: email, errorMessage: emailError } = useField(
  'signup-email',
  yupString()
    .required('Email is required.')
    .email('Check your email address, It\'s wrong type')
)
const { value: username, errorMessage: usernameError } = useField(
  'signup-username',
  yupString()
    .required('Username is required.')
    .min(4, 'Username is over 4 characters.')
    .max(12, 'Username is under 12 characters.')
)
const { value: pwd, errorMessage: pwdError } = useField(
  'signup-pwd',
  yupString()
    .required('Password is required.')
    .min(4, 'Password is over 4 characters.')
    .max(16, 'Password is under 16 characters.')
)
const { value: pwdc, errorMessage: pwdcError } = useField(
  'signup-pwdc',
  yupString()
    .required('Password Confirm is required.')
    .test('sameValue', 'Passwords must match.', value => value === pwd.value)
)

//  submit
const onSignin = () => {
  const errorMessage = Object.values(errors?.value ?? {})
  if (errorMessage.length > 0) {
    emit('alert', errorMessage[0])
    return
  }

  //  export as object to submit
  const formData = { email, username, pwd, pwdc }
  emit('submit', formData)
}
</script>

<style lang="scss" scoped>

</style>
