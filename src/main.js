import { createApp } from 'vue'
import router from '@/router/index'
import store from '@/store/index'
import App from '@/App.vue'

import '@/assets/scss/style.scss'

createApp(App).use(router).use(store).mount('#app')
