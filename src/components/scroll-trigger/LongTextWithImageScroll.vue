<template>
  <div
    ref="wrapper"
    :class="$style.contents"
  >
    <div
      ref="left"
      :class="$style['contents-left']"
    >
      <img
        v-for="idx in 4"
        :id="`img-${idx}`"
        :key="`img-${idx}`"
        :class="$style['contents-left-image']"
        :src="`https://picsum.photos/id/${25 + idx}/200/400`"
        alt=""
      >
    </div>
    <div
      ref="right"
      :class="$style['contents-right']"
    >
      <h4>Lorem ipsum</h4>
      <div
        v-for="idx in 4"
        :key="`p-${idx}`"
      >
        <p :data-target="`img-${idx}`">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium culpa recusandae suscipit nihil dicta amet tempore quo saepe natus, libero ex ea sapiente, aliquid minus repellat quod iste assumenda vel!
        </p>
        <p :data-target="`img-${idx}`">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi asperiores inventore, molestias necessitatibus quo amet tenetur delectus reprehenderit praesentium rem laudantium dolores repudiandae illo quod a fugit, molestiae, nobis laboriosam?
        </p>
        <p :data-target="`img-${idx}`">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas qui fugit culpa nam velit, tenetur recusandae quisquam commodi labore earum omnis eaque maiores! Molestiae reiciendis, deleniti omnis itaque sit fuga.
        </p>
        <p :data-target="`img-${idx}`">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel esse officia amet fugit laborum? Odio saepe enim ad laborum, ipsa eveniet, iusto excepturi quod eum dignissimos voluptas earum nobis sunt!
        </p>
        <p :data-target="`img-${idx}`">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione rerum fugiat asperiores delectus consequuntur voluptatibus tempora nam animi aliquam eveniet placeat veritatis, dignissimos nulla voluptatem expedita qui quis corrupti deserunt?
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, useCssModule } from 'vue'
import { gsap } from 'gsap'

const wrapper = ref(null)
const left = ref(null)
const right = ref(null)
const $style = useCssModule()

const setScrollTrigger = () => {
  //  pin images
  left.value.querySelectorAll('img').forEach((target, idx) => {
    gsap.set(target, { xPercent: -50, yPercent: -50 })
    gsap.to(target, {
      scrollTrigger: {
        trigger: wrapper.value,
        id: `st-img-${idx}`,
        start: 'top top',
        end: 'bottom bottom',
        pin: left.value
      }
    })
  })

  //  toggle visibility by paragraph
  right.value.querySelectorAll('p').forEach((target, idx) => {
    const targetImage = document.querySelector(`#${target.dataset.target}`)

    gsap.to(target, {
      scrollTrigger: {
        trigger: target,
        id: `st-text-${idx}`,
        start: 'top center',
        end: 'bottom bottom',
        onEnter () {
          targetImage.classList.add('visible')
        },
        onEnterBack () {
          targetImage.classList.remove('visible')
        }
      }
    })
  })
}

onMounted(() => {
  setScrollTrigger()
})
</script>

<style lang="scss" scoped>
.visible {
  opacity: 1;
}
</style>

<style lang="scss" module>
.contents{
  margin: $spacer * 5 auto;
  display: flex;
  justify-content: space-around;
  &-left {
    position: relative;
    width: 50%;
    height: 100vh;
    &-image {
      position: absolute;
      left: 50%;
      top: 50%;
      opacity: 0;
      transition: opacity .3s ease;
      width: 200px;
      height: 400px;
    }
  }
  &-right {
    width: 50%;
  }
}
</style>
