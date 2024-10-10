<script setup>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
defineProps(['casts'])
</script>
<template>
  <div>
    <h1 class="title">Casts</h1>
    <Splide
      :options="{
        rewind: true,
        perPage: 5,
        gap: 10,
        padding: 75
      }"
      aria-label="Casts"
      :has-track="false"
    >
      <SplideTrack v-if="casts" class="container-cards">
        <SplideSlide v-for="cast in casts" :key="cast.id" class="card">
          <img :src="`https://image.tmdb.org/t/p/w500/${cast.profile_path}`" alt="cast img" />
          <div class="text">
            <span class="fw-bold">{{ cast.name }}</span>
            <span>{{ cast.character }}</span>
          </div>
        </SplideSlide>
      </SplideTrack>
      <div class="splide__progress">
        <div class="splide__progress__bar" />
      </div>
      <div class="splide__arrows" />
    </Splide>
  </div>
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
  display: flex;
  flex-direction: column;
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
img {
  text-align: center;
  align-content: center;
}
</style>
