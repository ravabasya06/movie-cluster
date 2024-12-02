<script setup>
import { RouterLink } from 'vue-router'

defineProps(['movie'])
</script>

<template>
  <div
    class="modal"
    id="moviepopup"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-zoom">
      <div class="modal-content">
        <div class="img-container">
          <img
            v-if="movie.backdrop_path"
            :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"
            alt="the image"
          />
          <div class="action-buttons">
            <RouterLink
              v-if="movie.id"
              data-dismiss="modal"
              aria-label="Close"
              :to="{ name: 'details', params: { movie_id: movie.id } }"
              class="close detail-button"
              >Details</RouterLink
            >
          </div>
        </div>
        <div class="modal-body">
          <h1 class="modal-title f-5 fw-bold">
            {{ movie.title }}
          </h1>
          <div class="small-detail">
            <p>
              {{ movie.release_date }}
            </p>
            <div class="rating-container">
              <p>
                <font-awesome-icon icon="fa-regular fa-star" />
                {{ movie.vote_average }}
              </p>
              <p>
                <font-awesome-icon icon="fire" />
                {{ movie.popularity }}
              </p>
            </div>
          </div>
          <span>
            {{ movie.overview }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  align-content: center;
}

.img-container {
  position: relative;
  width: 100%;
  height: auto;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.rating-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.btn-close {
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  height: 20px;
}

.btn-close:focus {
  outline: none;
  box-shadow: none;
}

.action-buttons {
  position: absolute;
  bottom: 0;
  display: flex;
}

.detail-button {
  color: white;
  cursor: pointer;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.95);
  padding: 15px;
  align-items: center;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

.detail-button:hover {
  color: gray;
}

.small-detail {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.modal-content {
  background-color: rgba(0, 0, 0, 0.95);
  color: rgb(255, 255, 255);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 0;
}

.modal-dialog-zoom {
  transform: scale(0);
  transition: transform 0.5s ease-in-out;
}

.modal.fade.show .modal-dialog-zoom {
  transform: scale(1);
}
</style>
