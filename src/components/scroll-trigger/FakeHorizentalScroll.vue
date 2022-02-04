<template>
  <div
    ref="wrapper"
    class="d-flex flex-nowrap"
  >
    <section
      v-for="idx in 5"
      :key="`section-${idx}`"
      class="section flex-shrink-0 d-flex justify-content-center align-items-center"
    >
      <span class="text-center">Part. {{ idx }}</span>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const wrapper = ref(null)
const maxWidth = ref(0)
const getMaxWidth = () => Array.from(document.querySelectorAll('.section')).reduce((prev, curr) => prev + curr.offsetWidth, 0)

ScrollTrigger.addEventListener('refreshInit', () => {
  maxWidth.value = getMaxWidth()
})

//  init fake horizental scroll
const setScrollTrigger = () => {
  const sections = gsap.utils.toArray(document.querySelectorAll('.section'))

  //  create movement horizental scroll
  gsap.to(sections, {
    x: () => `-${maxWidth.value - window.innerWidth}`,
    ease: 'none',
    scrollTrigger: {
      trigger: wrapper.value,
      pin: true,
      scrub: true,
      end: () => `+=${maxWidth.value}`,
      invalidateOnRefresh: true
    }
  })

  //  trigger vertical scroll
  sections.forEach(it => {
    ScrollTrigger.create({
      trigger: it,
      start: () => 'top top-=' + (it.offsetLeft - window.innerWidth / 2) * (maxWidth.value / (maxWidth.value - window.innerWidth)),
      end: () => '+=' + it.offsetWidth * (maxWidth.value / (maxWidth.value - window.innerWidth)),
      toggleClass: { targets: it, className: 'active' }
    })
  })
}

onMounted(() => {
  maxWidth.value = getMaxWidth()
  setScrollTrigger()
})
</script>

<style lang="scss" scoped>
.section {
  width: 50vw;
  height: 100vh;
  &:first-child, &:last-child {
    width: 100vw;
  }

  @for $i from 0 to 20 {
    &:nth-child(#{$i}) {
      background-color: rgb(random(255), random(255), random(255));
    }
  }
  span{
    color: white;
    mix-blend-mode: difference;
    font-size: 5rem;
    font-weight: lighten;
  }
}
</style>
