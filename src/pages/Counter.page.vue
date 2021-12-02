<template>
  <div>
    <div class="row">
      <div class="col col-12">
        <h2>Counter</h2>
      </div>
    </div>
    <div class="row">
      <div class="col col-12">
        <div class="input-group">
          <button
            class="btn btn-primary"
            @click="addCount"
          >
            <i class="bi bi-plus-lg" />
          </button>
          <span class="input-group-text">{{ count }}</span>
          <button
            class="btn btn-primary"
            @click="subtrCount"
          >
            <i class="bi bi-dash-lg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const count = ref(0)

const addCount = () => count.value++
const subtrCount = () => count.value--
</script>

<style lang="scss" scoped>
</style>