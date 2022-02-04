<template>
  <div
    ref="imageWrapper"
    :class="$style['scroll-image-wrapper']"
  >
    <p
      :class="$style['scroll-image-text']"
      class="scroll-image-target"
    >
      {{ upperAlphabet.join('') }}
    </p>
    <div
      v-for="wIdx in 3"
      :key="`img-wrapper-${wIdx}`"
      :class="$style['scroll-image-img-wrapper']"
      class="scroll-image-target"
    >
      <img
        v-for="idx in 8"
        :key="`img-${wIdx}-${idx}`"
        :class="$style['scroll-image-img-item']"
        :src="`https://picsum.photos/id/${15 * (wIdx+1) + idx}/400/400`"
        :alt="`img-${idx}`"
      >
    </div>
    <p
      :class="$style['scroll-image-text']"
      class="scroll-image-target"
    >
      {{ [...upperAlphabet].reverse().join('') }}
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

//  Array of a to z
const upperAlphabet = [...Array(26).keys()].map(it => String.fromCharCode(it + 65).toUpperCase())

//  init image scroll trigger
const imageWrapper = ref(null)
const setImageTrigger = () => {
  const wrapper = imageWrapper?.value
  if (!wrapper) return

  gsap.utils.toArray('.scroll-image-target').forEach((it, idx) => {
    const [x, xEnd] = idx % 2 ? ['100%', (wrapper.scrollWidth - it.offsetWidth) * -1] : [wrapper.scrollWidth * -1, 0]

    gsap.fromTo(
      it,
      { x },
      {
        x: xEnd,
        scrollTrigger: {
          trigger: wrapper,
          scrub: 0.5
        }
      }
    )
  })
}

onMounted(() => {
  setImageTrigger()
})

</script>

<style lang="scss" scoped>
.scroll-image-target {
  margin: #{$spacer * 2} 0;
}
</style>

<style lang="scss" module>
.scroll-image {
  &-wrapper {
    position: relative;
  }
  &-text {
    font-size: 10rem;
    font-weight: bold;
    line-height: 1;
  }
  &-img {
    &-wrapper {
      display: flex;
    }
    &-item {
      width: 400px;
      height: 400px;
      &:not(:last-child) {
        margin: 0 $spacer;
      }
    }
  }
}
</style>
