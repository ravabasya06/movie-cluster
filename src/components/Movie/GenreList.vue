<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['genrelist', 'selected_genre'])
const router = useRouter()

// start from the genres already in the URL so the checkboxes stay ticked
const selectedGenres = ref([...(props.selected_genre ?? [])])

const search = () => {
  if (selectedGenres.value.length > 0) {
    router.push({ name: 'search', query: { genres: selectedGenres.value.join(',') } })
  } else {
    router.push({ name: 'search' })
  }
}

const isSelected = (genre) => selectedGenres.value.includes(genre)

const toggleGenre = (genre) => {
  const index = selectedGenres.value.indexOf(genre)
  if (index === -1) {
    selectedGenres.value.push(genre)
  } else {
    selectedGenres.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="genre-container">
    <form class="genre-form" @submit.prevent="search">
      <div class="genre-list-container">
        <div v-for="genre in props.genrelist.genres" :key="genre.id" class="genre-list" id="genre">
          <p>{{ genre.name }}</p>
          <input type="checkbox" :checked="isSelected(genre.id)" @change="toggleGenre(genre.id)" />
        </div>
      </div>
      <input type="submit" value="Search" />
    </form>
  </div>
</template>
<style scoped>
.genre-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.genre-list-container {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  max-width: 100%;
  gap: 15px;
  padding: 10px;
  align-items: center;
}
.genre-list {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  border-radius: 8px;
  border: 1px solid white;
  padding: 15px;
  gap: 5px;
}

.genre-list input:checked {
  background-color: white;
  color: black;
}

.genre-list:hover {
  background-color: white;
  color: black;
}

.genre-list p {
  font-size: 15px;
  margin: 0;
  white-space: nowrap;
}
.genre-list input {
  width: 20px;
  /* display: none; */
}
.genre-checked {
  background-color: #add8e6;
}
</style>
