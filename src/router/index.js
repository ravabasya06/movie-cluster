import { createMemoryHistory, createRouter } from 'vue-router'

import TheHome from '@/pages/TheHome.vue'
import TheDetails from '@/pages/TheDetails.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { path: '/', name: 'home', component: TheHome },
  { path: '/movie/:movie_id', name: 'details', component: TheDetails }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
