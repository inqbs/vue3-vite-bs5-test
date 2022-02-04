<template>
  <div class="container-fluid my-5">
    <div class="text-center">
      <h2>ScrollTrigger Test</h2>
      <p class="small text-muted">
        for test scroll trigger by gsap
      </p>
    </div>
    <div
      class="row"
      :class="$style.section"
    >
      <div class="col col-12">
        <ImageScroll />
      </div>
    </div>
  </div>
</template>

<script setup>
import ImageScroll from '@/components/scroll-trigger/ImageScroll.vue'
</script>

<style lang="scss" module>
.section{
  min-height: 640px;
  overflow: hidden;
}
</style>

<route lang="yaml">
name: ScrollTrigger
</route>
