import { createRouter, createWebHistory } from 'vue-router'

import TheHome from '@/pages/TheHome.vue'
import TheDetails from '@/pages/TheDetails.vue'
import MovieSearch from '@/pages/MovieSearch.vue'

const routes = [
  { path: '/', name: 'home', component: TheHome, meta: { title: 'Home' } },
  {
    path: '/movie/:movie_id',
    name: 'details',
    component: TheDetails,
    meta: { title: 'Movie Details' }
  },
  // the search page sets its own title (the keyword, or "Search")
  { path: '/search', name: 'search', component: MovieSearch }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})

export default router
