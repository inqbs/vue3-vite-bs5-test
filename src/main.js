import { createApp } from 'vue'
import router from '@/router/index'

import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

import '@/plugins/day.js'

import App from '@/App.vue'

import '@/assets/scss/style.scss'

const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App).use(router).use(pinia).mount('#app')
