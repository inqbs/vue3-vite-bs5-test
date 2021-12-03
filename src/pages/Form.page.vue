<template>
  <div>
    <div
      class="sticky-top py-5 bg-white border-bottom"
      :class="$style['form-header']"
    >
      <div class="container">
        <div class="row">
          <div class="col col-9 col-md-10">
            <h2>Form</h2>
            <p class="text-muted mb-0">
              Vee-validate Test
            </p>
          </div>
          <div class="col col-3 col-md-2 d-flex">
            <div class="dropdown align-self-center w-100">
              <button
                id="dropMenu"
                ref="dropMenu"
                class="btn btn-dark dropdown-toggle w-100"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Index
              </button>
              <ul
                class="dropdown-menu"
                aria-labelledby="dropMenu"
              >
                <li>
                  <a
                    class="dropdown-item"
                    href="#signin-form"
                  >Sign In Form</a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#signup-form"
                  >Sign Up Form</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

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
import {ref, onMounted} from 'vue'
import {Dropdown} from 'bootstrap'

import MyAlert from '@/components/MyAlert.vue'
import SignInForm from '@/components/form/SignInForm.vue'

//  alert 
const alertMsg = ref('')
const onAlert = (msg = '') => {
  alertMsg.value = msg
}

//  onsubmit
const onSubmit = (formData) => {
  console.log('onSubmit', formData)
}

// menu dropdown
const dropMenu = ref(null)

//  setup bootstrap
onMounted(() => {
  new Dropdown(dropMenu.value)
})

</script>

<style lang="scss" module>
.form-header {
  top: $spacer * 3;
}
</style>