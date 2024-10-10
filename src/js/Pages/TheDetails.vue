<script setup>
import Layout from '../Components/Layout.vue'
import MovieCarousel from '../Components/Home/MovieCarousel.vue'
import CastCarousel from '../Components/Movie/CastCarousel.vue'
defineProps(['movie', 'release_date', 'recommendation_movies', 'casts'])
</script>

<template>
  <Head title="Movie Details" />
  <Layout>
    <div class="detail-page">
      <div class="movie-page">
        <div class="movie-details">
          <div class="title">
            <h1>{{ movie.title }}</h1>
            <h2
              v-if="
                movie.release_dates.results.find((result) => result.iso_3166_1 === 'US')
                  ?.release_dates[0]?.certification
              "
              class="age-rate"
            >
              {{
                movie.release_dates.results.find((result) => result.iso_3166_1 === 'US')
                  .release_dates[0].certification
              }}
            </h2>
          </div>
          <div class="small-details">
            <p v-if="movie.tagline">{{ movie.tagline }}</p>
            <div class="genre-title-container">
              <Link
                v-for="genre in movie.genres"
                :key="genre.id"
                :href="`/search?genres=${genre.id}`"
              >
                <span class="genre-title">
                  {{ genre.name }}
                </span>
              </Link>
            </div>
            <div class="rating">
              <p>
                <font-awesome-icon icon="fa-regular fa-star" />
                {{ movie.vote_average }}
              </p>
              <p>
                <font-awesome-icon icon="fire" />
                {{ movie.popularity }}
              </p>
            </div>
            <div class="date">
              <p class="relase_date">{{ release_date }}</p>
              <p class="status">{{ movie.status }}</p>
            </div>
            <p>{{ movie.overview }}</p>
            <a :href="movie.homepage" target="_blank" rel="noopener noreferrer">
              <span class="movie-link">{{ movie.homepage }}</span>
            </a>
          </div>
        </div>
        <div class="poster">
          <img
            :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
            alt="movie poster"
          />
        </div>
      </div>
      <div class="company-container">
        <div v-for="company in movie.production_companies" :key="company.id" class="company">
          <img :src="`https://image.tmdb.org/t/p/w500/${company.logo_path}`" alt="company img" />
          <span>{{ company.name }}</span>
        </div>
      </div>
      <CastCarousel :casts="casts" />
      <MovieCarousel title1="Recommendations" :movies1="recommendation_movies" />
    </div>
  </Layout>
</template>

<style scoped>
.detail-page {
  margin: 0;
  box-sizing: border-box;
}

.movie-page {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  overflow: hidden;
}

.movie-details {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
}

.genre-title-container {
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 1rem;
}

.genre-title {
  background-color: rgb(15, 15, 15);
  padding: 10px;
  border-radius: 10px;
}

.genre-title:hover {
  background-color: white;
}

.status {
  background-color: rgb(15, 15, 15);
  border-radius: 10px;
  padding: 8px;
}

.rating {
  display: flex;
  flex-direction: row;
  gap: 15px;
}

.date {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.age-rate {
  margin: 0;
  padding: 5px;
  border: 1px solid white;
}

.poster img {
  max-width: 80vh;
  /* max-height: 80vh; */
  /* width: auto; */
  /* height: auto; */
  object-fit: cover;
}

.company-container {
  padding: 100px;
  background-color: aliceblue;
  color: #000;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  justify-content: center;
}

.company {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  gap: 10px;
  border: 1px solid #c0bfbf74;
  border-radius: 5px;
}

.company img {
  max-width: 100px;
  height: auto;
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  color: rgba(15, 15, 15);
}

.movie-link:hover {
  color: black;
}
</style>
