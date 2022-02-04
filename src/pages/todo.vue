<template>
  <div class="container">
    <div class="row my-5">
      <div class="col col-10 col-md-11">
        <h2>Todo</h2>
        <p class="text-muted small mb-0">
          {{ list.length }} todos is added.
        </p>
      </div>
      <div class="col col-2 col-md-1">
        <div class="d-flex h-100">
          <div
            class="btn-group"
            role="group"
          >
            <button
              class="btn btn-info w-100 text-white align-self-center"
              @click.prevent="refresh"
            >
              <i class="bi bi-arrow-clockwise" />
            </button>
            <button
              class="btn btn-danger w-100 text-white align-self-center"
              @click.prevent="clear"
            >
              <i class="bi bi-eraser-fill" />
            </button>
          </div>
        </div>
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
              placeholder="Add Your Todo"
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
    <div class="row mb-5">
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
                :datetime="dayjs(item.date).format('YYYY-MM-dd HH:mm:ss')"
              >
                {{ dayjs(item.date).fromNow() }}
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
import { computed, ref } from 'vue'
import { useTodoStore } from '@/stores/todo'

import dayjs from 'dayjs'

const todoStore = useTodoStore()

//  data & computed
const text = ref('')
const list = computed(() => todoStore.list)

//  methods
const add = () => {
  todoStore.add({ text: text.value })
  text.value = ''
}
const remove = id => todoStore.remove({ id })
const refresh = () => todoStore.sort()
const clear = () => todoStore.clear()
</script>

<style lang="scss" scoped>
.flip-list {
  &-move{
    transition: all 0.3s ease;
  }
  &-leave-to{
      opacity: 0;
      transform: translateX(30px)
  }
}
</style>

<route lang="yaml">
name: Todo
meta:
  requiresAuth: true
</route>
