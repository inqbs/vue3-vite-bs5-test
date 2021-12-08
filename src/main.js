import { createApp } from 'vue'
import router from '@/router/index'
import { createPinia } from 'pinia'
import App from '@/App.vue'

import '@/assets/scss/style.scss'

createApp(App).use(router).use(createPinia()).mount('#app')
