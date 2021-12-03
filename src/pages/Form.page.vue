<template>
  <div>
    <div
      class="sticky-top py-5 bg-white border-bottom"
      :class="$style['form-header']"
    >
      <div class="container">
        <div class="row ">
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
                    href="#sign-in-form"
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
          <form
            id="sign-in-form"
            action=""
            class="border p-5"
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
                v-model="signIn.email"
                type="email"
                name="signin-email"
                class="form-control"
                placeholder="example@exmaple.com"
              >
              <label for="sign-in-email">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                id="sign-in-pwd"
                v-model="signIn.pwd"
                type="pwd"
                name="pwd"
                class="form-control"
                placeholder="input your password"
              >
              <label for="sign-in-pwd">Password</label>
            </div>
            <button
              class="btn btn-dark btn-lg d-block w-100"
              @click.prevent
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, onMounted} from 'vue'
import {Dropdown} from 'bootstrap'

/*  menu dropdown */
const dropMenu = ref(null)
onMounted(() => {
  new Dropdown(dropMenu.value)
})

/*   signin form  */
const signIn = reactive({
  email: '',
  pwd: '',
})


</script>

<style lang="scss" module>
.form-header {
  top: $spacer * 3;
}
</style>