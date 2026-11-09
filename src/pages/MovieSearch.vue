<script setup>
import { ref, computed, watch, watchEffect, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Layout from '../components/TheLayout.vue'
import MovieModal from '../components/Home/MovieModal.vue'
import Pagination from '../components/Movie/PaginationBar.vue'
import GenreList from '../components/Movie/GenreList.vue'
import { getGenreList, discoverMovies, searchMovies } from '@/services/tmdb'

const route = useRoute()

// state that used to come from the Laravel controller, now derived from the URL
const query = computed(() => route.query.search_query || '')
const page = computed(() => Number(route.query.page) || 1)
const genres = computed(() =>
  route.query.genres ? String(route.query.genres).split(',').map(Number) : []
)

const movies = ref(null)
const genrelist = ref({ genres: [] })
const error = ref(false)

let Movie
const selectedMovie = ref('')
const containerRef = ref(null)

onMounted(() => {
  const MovieModalElement = document.getElementById('moviepopup')
  if (MovieModalElement) {
    Movie = new bootstrap.Modal(MovieModalElement)
  }
  getGenreList()
    .then((data) => (genrelist.value = data))
    .catch((e) => console.error('Error fetching genres:', e))
})

const showmovie = (themovie) => {
  selectedMovie.value = themovie
  Movie.show()
}

watchEffect(() => {
  document.title = `Movie Cluster - ${query.value || 'Search'}`
})

// refetch whenever the keyword, page or selected genres change
watch(
  () => [query.value, page.value, genres.value.join(',')],
  async ([q, p, g]) => {
    error.value = false
    try {
      movies.value = q
        ? await searchMovies({ query: q, page: p })
        : await discoverMovies({ page: p, genres: g })
    } catch (e) {
      console.error('Error fetching movies:', e)
      error.value = true
    }
  },
  { immediate: true }
)
</script>
<template>
  <Layout>
    <GenreList v-if="!query" :genrelist="genrelist" :selected_genre="genres" />
    <div class="search-container">
      <p v-if="error">Could not load movies. Please try again later.</p>
      <h2>
        {{ query ? `Here are results for the keyword : ${query}` : '' }}
      </h2>
      <div v-if="movies && movies.results.length" class="container-cards" ref="containerRef">
        <div v-for="movie in movies.results" :key="movie.id" class="card" @click="showmovie(movie)">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" :alt="movie.title" />
          <div class="rating">
            <font-awesome-icon icon="fa-regular fa-star" />
            <span>{{ movie.vote_average.toFixed(1) }}</span>
          </div>
          <div class="text fw-bold">
            <span>{{ movie.title }}</span>
          </div>
        </div>
      </div>
      <Pagination v-if="movies" :movies="movies" :query="query" :genres="genres" />
    </div>
    <MovieModal :movie="selectedMovie" />
  </Layout>
</template>
<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.container-cards {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  overflow: hidden;
  gap: 15px;
  padding: 15px;
}

.card {
  min-width: calc(100% / 5 - 60px);
  max-width: calc(500px / 2);
  max-height: calc(750px / 2);
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.rating {
  display: flex;
  position: absolute;
  align-items: center;
  gap: 5px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px;
  z-index: 1;
}

.text {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  text-align: center;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s;
}

.card:hover .text {
  opacity: 1;
}
</style>
