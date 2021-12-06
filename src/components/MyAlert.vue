<template>
  <div
    ref="toast"
    class="toast alert-toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast-header">
      <strong class="me-auto">Notice</strong>
      <button
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
        type="button"
      />
    </div>
    <div class="toast-body p-4">
      <p class="mb-0 text-center">
        {{ message }}
      </p>
    </div>
    <div class="toast-footer">
      <button
        class="btn btn-dark d-block w-100"
        data-bs-dismiss="toast"
        aria-label="Close"
        type="button"
      >
        OK
      </button>
    </div>
  </div>
  <div
    v-if="!!message"
    class="alert-backdrop fade"
    :class="{show: message}"
  />
</template>

<script setup>
import { ref, onMounted, watch, toRefs } from 'vue'
import { Toast } from 'bootstrap'

const props = defineProps({
  message: {
    type: String,
    required: true
  }
})
const { message } = toRefs(props)
const emit = defineEmits(['close'])

const toast = ref(null)

onMounted(() => {
  const bsToast = new Toast(toast.value, {
    autohide: false
  })

  //  show toast on changed alertMsg
  watch(message, (val) => {
    if (val) {
      bsToast.show()
    }
  })

  //  clear alertMsg on closed toast
  toast.value?.addEventListener('hidden.bs.toast', () => {
    emit('close')
  })
})

</script>

<style lang="scss">
@import '~bootstrap/scss/mixins/backdrop';

.alert {
  &-toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5000;
  }
  &-backdrop {
    @include overlay-backdrop($zindex-modal-backdrop, $modal-backdrop-bg, $modal-backdrop-opacity);
    transition: all 0.3s ease;
  }
}
</style>
