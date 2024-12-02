import './assets/main.css'
import { createApp } from 'vue'
import { FontAwesomeIcon } from './font-awesome'
import App from './App.vue'
import router from './router'

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
