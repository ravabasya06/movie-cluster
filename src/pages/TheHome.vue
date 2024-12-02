<script setup>
import { ref, onMounted } from 'vue'
import TheLayout from '../components/TheLayout.vue'
import MovieCarousel from '../components/Home/MovieCarousel.vue'

const popular_movies = ref([])
const top_movies = ref([])
const trending_movies = ref([])
const apiKey = import.meta.env.VITE_TMDB_API_KEY

onMounted(async () => {
  try {
    const popularResponse = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`
    )
    const popularData = await popularResponse.json()
    popular_movies.value = popularData

    const topResponse = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200&api_key=${apiKey}`
    )
    const topData = await topResponse.json()
    top_movies.value = topData

    const trendingResponse = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?include_adult=false&include_video=false&language=en-US&page=1&api_key=${apiKey}`
    )
    const trendingData = await trendingResponse.json()
    trending_movies.value = trendingData
  } catch (error) {
    console.error('Error fetching movie data:', error)
  }
})
</script>
<template>
  <TheLayout>
    <MovieCarousel
      title1="Popular Today"
      title2="Top Movies"
      title3="Trending Today"
      :movies1="popular_movies"
      :movies2="top_movies"
      :movies3="trending_movies"
    />
  </TheLayout>
</template>
