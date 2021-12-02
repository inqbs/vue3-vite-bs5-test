<template>
  <div>
    <div class="row my-4">
      <div class="col col-11">
        <h2>Todo</h2>
        <p class="text-muted small">
          {{ list.length }} todos is added.
        </p>
      </div>
      <div class="col col-1">
        <button
          class="btn btn-info w-100 text-white"
          @click.prevent="refresh"
        >
          <i class="bi bi-arrow-clockwise" />
        </button>
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
        <transition-group
          class="list-group"
          tag="ul"
          name="flip-list"
        >
          <li
            v-for="item in list"
            :key="item.id"
            class="list-group-item"
          >
            <p> {{ item.text }} </p>
            <div class="d-flex w-100 justify-content-between">
              <time
                class="text-muted small"
                :datetime="moment(item.date).format('YYYY-MM-dd HH:mm:ss')"
              >
                {{ moment(item.date).fromNow() }}
              </time>
              <button
                class="btn btn-sm btn-danger"
                @click.prevent="remove(item.id)"
              >
                <i class="bi bi-trash-fill" />
              </button>
            </div>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import { useStore } from 'vuex'

import moment from 'moment'

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
const refresh = () => store.dispatch('TodoStore/refresh')
</script>

<style lang="scss" scoped>
.flip-list-move {
  transition: all 0.3s ease;
}
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px)
}
</style>