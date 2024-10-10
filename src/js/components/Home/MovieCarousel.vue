<script setup>
// import { onMounted, ref } from "vue";
// import { Splide, SplideSlide, SplideTrack } from "@splidejs/vue-splide";
// import "@splidejs/vue-splide/css";
// import MovieModal from "./MovieModal.vue";
// defineProps([
//     "title1",
//     "movies1",
//     "title2",
//     "movies2",
//     "title3",
//     "movies3",
//     "title4",
//     "movies4",
//     "title5",
//     "movies5",
// ]);

// let Movie;
// const selectedMovie = ref("");

// onMounted(() => {
//     const MovieModalElement = document.getElementById("moviepopup");
//     if (MovieModalElement) {
//         Movie = new bootstrap.Modal(MovieModalElement);
//     }
// });

// const showmovie = (themovie) => {
//     selectedMovie.value = themovie;
//     Movie.show();
// };
</script>
<template>
  <div>
    <!-- <h1 class="title">{{ title1 }}</h1> -->
    <Splide
      :options="{
        rewind: true,
        perPage: 5,
        gap: 10,
        padding: 75
      }"
      :aria-label="title1"
      :has-track="false"
    >
      <SplideTrack v-if="movies1" class="container-cards">
        <SplideSlide
          v-for="movie in movies1.results"
          :key="movie.id"
          class="card"
          @click="showmovie(movie)"
        >
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Movie Poster" />
          <div class="rating">
            <font-awesome-icon icon="fa-regular fa-star" />
            <span>{{ movie.vote_average.toFixed(1) }}</span>
          </div>
          <div class="text fw-bold">
            <span>{{ movie.title }}</span>
          </div>
        </SplideSlide>
      </SplideTrack>
      <div class="splide__progress">
        <div class="splide__progress__bar" />
      </div>
      <div class="splide__arrows" />
    </Splide>
  </div>
  <div v-if="movies2 && title2">
    <h1 class="title">{{ title2 }}</h1>
    <Splide
      :options="{
        rewind: true,
        perPage: 5,
        gap: 10,
        padding: 75
      }"
      :aria-label="title2"
      :has-track="false"
    >
      <SplideTrack v-if="movies2" class="container-cards">
        <SplideSlide
          v-for="movie in movies2.results"
          :key="movie.id"
          class="card"
          @click="showmovie(movie)"
        >
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Movie Poster" />
          <div class="rating">
            <font-awesome-icon icon="fa-regular fa-star" />
            <span>{{ movie.vote_average.toFixed(1) }}</span>
          </div>
          <div class="text fw-bold">
            <span>{{ movie.title }}</span>
          </div>
        </SplideSlide>
      </SplideTrack>
      <div class="splide__progress">
        <div class="splide__progress__bar" />
      </div>
      <div class="splide__arrows" />
    </Splide>
  </div>
  <div v-if="movies3 && title3">
    <h1 class="title">{{ title3 }}</h1>
    <Splide
      :options="{
        rewind: true,
        perPage: 5,
        gap: 10,
        padding: 75
      }"
      :aria-label="title3"
      :has-track="false"
    >
      <SplideTrack v-if="movies3" class="container-cards">
        <SplideSlide
          v-for="movie in movies3.results"
          :key="movie.id"
          class="card"
          @click="showmovie(movie)"
        >
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Movie Poster" />
          <div class="rating">
            <font-awesome-icon icon="fa-regular fa-star" />
            <span>{{ movie.vote_average.toFixed(1) }}</span>
          </div>
          <div class="text fw-bold">
            <span>{{ movie.title }}</span>
          </div>
        </SplideSlide>
      </SplideTrack>
      <div class="splide__progress">
        <div class="splide__progress__bar" />
      </div>
      <div class="splide__arrows" />
    </Splide>
  </div>
  <div v-if="movies4 && title4">
    <h1 class="title">{{ title4 }}</h1>
    <Splide
      :options="{
        rewind: true,
        perPage: 5,
        gap: 10,
        padding: 75
      }"
      :aria-label="title4"
      :has-track="false"
    >
      <SplideTrack v-if="movies4" class="container-cards">
        <SplideSlide
          v-for="movie in movies4.results"
          :key="movie.id"
          class="card"
          @click="showmovie(movie)"
        >
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Movie Poster" />
          <div class="rating">
            <font-awesome-icon icon="fa-regular fa-star" />
            <span>{{ movie.vote_average.toFixed(1) }}</span>
          </div>
          <div class="text fw-bold">
            <span>{{ movie.title }}</span>
          </div>
        </SplideSlide>
      </SplideTrack>
      <div class="splide__progress">
        <div class="splide__progress__bar" />
      </div>
      <div class="splide__arrows" />
    </Splide>
  </div>
  <div v-if="movies5 && title5">
    <h1 class="title">{{ title5 }}</h1>
    <Splide
      :options="{
        rewind: true,
        perPage: 5,
        gap: 10,
        padding: 75
      }"
      :aria-label="title5"
      :has-track="false"
    >
      <SplideTrack v-if="movies5" class="container-cards">
        <SplideSlide
          v-for="movie in movies5.results"
          :key="movie.id"
          class="card"
          @click="showmovie(movie)"
        >
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="Movie Poster" />
          <div class="rating">
            <font-awesome-icon icon="fa-regular fa-star" />
            <span>{{ movie.vote_average.toFixed(1) }}</span>
          </div>
          <div class="text fw-bold">
            <span>{{ movie.title }}</span>
          </div>
        </SplideSlide>
      </SplideTrack>
      <div class="splide__progress">
        <div class="splide__progress__bar" />
      </div>
      <div class="splide__arrows" />
    </Splide>
  </div>
  <MovieModal :movie="selectedMovie" />
</template>
<style scoped>
.splide__progress {
  margin: 20px;
}

.title {
  margin: 15px;
  margin-left: 20px;
}

.container-cards {
  display: flex;
  overflow: hidden;
  gap: 15px;
  padding: 15px;
}

.card {
  /* min-width: calc(100% / 5 - 60px); */
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
