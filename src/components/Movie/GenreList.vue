<script setup>
// import { useForm, router } from "@inertiajs/vue3";
// const props = defineProps(["genrelist", "selected_genre"]);
// function myFunction() {
//     const isChecked = document.getElementById("myCheck");
//     const genre = document.getElementById("genre");
//     if (isChecked.checked == true) {
//         genre.backgroundColor = "white";
//     } else {
//         genre.backgroundColor = "none";
//     }
// }

// const form = useForm({
//     genres: [],
// });

// const search = () => {
//     if (form.genres.length > 0) {
//         form.genres = form.genres.join();
//         form.get(route("search"));
//     } else {
//         router.visit("/search");
//     }
// };

// const isSelected = (genre) => {
//     return form.genres.includes(genre);
// };

// const toggleGenre = (genre) => {
//     const index = form.genres.indexOf(genre);
//     if (index === -1) {
//         form.genres.push(genre);
//     } else {
//         form.genres.splice(index, 1);
//     }
// };
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
