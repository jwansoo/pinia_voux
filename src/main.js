import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './stores'
import './assets/main.css'

const app = createApp(App)
const pinia=createPinia()
app
.use(pinia)
.use(store)
.use(router)
.mount('#app')
