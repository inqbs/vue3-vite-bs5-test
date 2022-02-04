<template>
  <div class="container ">
    <div class="row  py-5">
      <div class="col">
        <h2>Cropper</h2>
        <p class="text-muted mb-0">
          vee-cropperjs test
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col col-8">
        <vue-cropper
          ref="cropper"
          :src="src"
          alt="image cropper"
          :aspect-ratio="16/9"
          :view-mode="1"
          drag-mode="move"
        />
      </div>
      <div class="col col-4">
        <img
          v-if="preview"
          :src="preview"
          class="w-100"
        >
        <div
          v-else
          class="
          card"
        >
          Crop to preview
        </div>
        <div>
          <button
            class="btn btn-primary"
            @click.prevent="crop"
          >
            crop
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import VueCropper from 'vue-cropperjs'

const cropper = ref(null)
const src = ref('https://picsum.photos/id/1005/640/360')
// const src = ref('https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4')
const preview = ref('')

const crop = async () => {
  //  get cropped image coordinate data
  const croppedImageData = cropper.value?.getCropBoxData()
  //  export cropped image to dataURL
  const dataUrl = cropper.value?.getCroppedCanvas()?.toDataURL()

  //  set dataURL to preview
  preview.value = dataUrl

  //  make Blob dataURL
  const croppedFile = await (await fetch(dataUrl)).blob()

  console.log('crop', croppedImageData, croppedFile)
}
</script>

<style lang="scss">
@import '~/cropperjs/src/index.scss';
</style>

<route lang="yaml">
name: Cropper
meta:
  requiresAuth: true
</route>
