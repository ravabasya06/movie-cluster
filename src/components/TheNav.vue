<script setup>
import Search from './TheSearch.vue'
</script>

<template>
  <nav class="navbar">
    <div class="left-group">
      <a href="/">
        <img class="logo" src="/src/movclus.png" alt="logo" />
      </a>
    </div>
    <div class="right-group">
      <a href="/search" class="genre-button">
        <font-awesome-icon icon="folder-open" />
        Genres
      </a>
      <Search />
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  background-color: black;
  z-index: 1;
  padding: 0;
}

.logo {
  padding: 15px;
  width: 180px;
}

.left-group {
  display: flex;
  align-items: center;
  gap: 10px;
}

.right-group {
  display: flex;
  align-items: center;
}

.genre-button {
  background-color: rgb(0, 0, 0);
  color: white;
  padding: 15px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 8px;
}
.genre-button:hover {
  background-color: white;
  color: black;
}
</style>
