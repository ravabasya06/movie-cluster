<script setup>
import { ref, onMounted } from 'vue'
import TheLayout from '../components/TheLayout.vue'
import MovieCarousel from '../components/Home/MovieCarousel.vue'
import { getPopularMovies, getTopMovies, getTrendingMovies } from '@/services/tmdb'

const popular_movies = ref(null)
const top_movies = ref(null)
const trending_movies = ref(null)
const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    ;[popular_movies.value, top_movies.value, trending_movies.value] = await Promise.all([
      getPopularMovies(),
      getTopMovies(),
      getTrendingMovies()
    ])
  } catch (e) {
    console.error('Error fetching movie data:', e)
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>
<template>
  <TheLayout>
    <p v-if="error" class="status-message">Could not load movies. Please try again later.</p>
    <MovieCarousel
      v-else-if="!loading"
      title1="Popular Today"
      title2="Top Movies"
      title3="Trending Today"
      :movies1="popular_movies"
      :movies2="top_movies"
      :movies3="trending_movies"
    />
  </TheLayout>
</template>

<style scoped>
.status-message {
  padding: 20px;
}
</style>
