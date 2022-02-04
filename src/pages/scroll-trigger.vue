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
    <hr>
    <div
      class="row"
      :class="$style.section"
    >
      <div class="col col-12">
        <LongTextWithImageScroll />
      </div>
    </div>
    <hr>
    <div
      class="row"
      :class="$style.section"
    >
      <div class="col col-12">
        <SlowBackgroundScroll />
      </div>
    </div>
    <div
      class="row bg-dark"
      :class="$style.section"
    >
      <div class="col col-12">
        <div class="h-100 d-flex justify-content-center align-items-center">
          <p class="display-3 text-white">
            Amazing Awesome.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ImageScroll from '@/components/scroll-trigger/ImageScroll.vue'
import LongTextWithImageScroll from '@/components/scroll-trigger/LongTextWithImageScroll.vue'
import SlowBackgroundScroll from '@/components/scroll-trigger/SlowBackgroundScroll.vue'
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
