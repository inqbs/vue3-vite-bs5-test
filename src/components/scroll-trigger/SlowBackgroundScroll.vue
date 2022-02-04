<template>
  <div
    ref="wrapper"
    class="wrapper"
  >
    <div class="inner">
      <img
        ref="innerImage"
        class="inner-image"
        src="https://picsum.photos/id/765/1920/1080"
        alt="bg"
      >
    </div>
    <div class="contents">
      <div
        ref="title"
        class="title"
      >
        <span>Lorem Ipsum</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const wrapper = ref(null)
const innerImage = ref(null)
const title = ref(null)

const setScrollTrigger = () => {
  const target = wrapper.value
  const image = innerImage.value
  if (!target || !image) return

  gsap.to(target, {
    scrollTrigger: {
      trigger: target,
      scrub: true,
      pin: true,
      start: 'center center',
      end: 'bottom -100%',
      toggleClass: {
        className: 'active',
        targets: title.value
      },
      ease: 'power2'
    }
  })

  gsap.to(image, {
    y: '-30%',
    scrollTrigger: {
      trigger: target,
      scrub: 0.5,
      start: 'top bottom',
      end: 'bottom, -300%',
      ease: 'power2'
    }
  })
}

onMounted(() => {
  setScrollTrigger()
})
</script>

<style lang="scss" scoped>
.wrapper {
}
.inner {
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  &-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 160%;
    object-fit: cover;
  }
}

.contents {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title {
  position: relative;
  display: inline-block;
  font-size: 2rem;
  overflow: hidden;
  text-transform: uppercase;

  span {
    display: block;
    transform: translateY(110%);
    transition: transform 1s ease;
    letter-spacing: 1.5rem;
    text-align: center;
    color: white;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: .125rem;
    transform: scaleX(0);
    transition: transform .3s ease;
    background: white;
  }

  &.active{
    span{
      transform: translateY(0);
    }
    &:after {
      transform: scaleX(1);
    }
  }
}
</style>
