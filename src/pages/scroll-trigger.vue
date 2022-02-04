<template>
  <div class="mt-5">
    <div class="text-center">
      <h2>ScrollTrigger Test</h2>
      <p class="small text-muted">
        for test scroll trigger by gsap
      </p>
    </div>
    <div
      :class="$style.section"
    >
      <ImageScroll />
    </div>
    <hr>
    <div
      :class="$style.section"
    >
      <LongTextWithImageScroll />
    </div>
    <hr>
    <div
      :class="$style?.['section']"
    >
      <SlowBackgroundScroll />
    </div>
    <div
      class="bg-dark h-100 d-flex justify-content-center align-items-center"
      :class="$style.section"
    >
      <p class="display-3 text-white">
        Amazing Awesome.
      </p>
    </div>
    <div
      :class="$style?.['section']"
    >
      <FakeHorizentalScroll />
    </div>
  </div>
</template>

<script setup>
import ImageScroll from '@/components/scroll-trigger/ImageScroll.vue'
import LongTextWithImageScroll from '@/components/scroll-trigger/LongTextWithImageScroll.vue'
import SlowBackgroundScroll from '@/components/scroll-trigger/SlowBackgroundScroll.vue'
import FakeHorizentalScroll from '@/components/scroll-trigger/FakeHorizentalScroll.vue'
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
