import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from './font-awesome'

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
