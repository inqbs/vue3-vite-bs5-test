<template>
  <div>
    <div class="row my-4">
      <div class="col col-12">
        <h2> todo </h2>
      </div>
    </div>
    <div class="row my-4">
      <div class="col col-12">
        <form action="">
          <div class="input-group">
            <input
              v-model="text"
              type="text"
              class="form-control"
            >
            <button
              class="btn btn-primary"
              @click.prevent="add"
            >
              <i class="bi bi-send-plus-fill" />
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col col-12">
        <ul class="list-group">
          <li
            v-for="item in list"
            :key="item.id"
            class="list-group-item"
          >
            <p> {{ item.text }} </p>
            <div class="d-flex w-100 justify-content-between">
              <time
                class="text-muted small"
                :datetime="item.date"
              >{{ item.date }}</time>
              <button
                class="btn btn-sm btn-danger"
                @click.prevent="remove(item.id)"
              >
                <i class="bi bi-trash-fill" />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import { useStore } from 'vuex'

const store = useStore()

//  data & computed
const text = ref('')
const list = computed(() => store.getters['TodoStore/todoList'])

//  methods
const add = () => {
  store.dispatch('TodoStore/add', {text: text.value})
  text.value = ''
}
const remove = id => store.dispatch('TodoStore/remove', {id})
</script>

<style lang="scss" scoped>

</style>