<script setup>
import { ref } from 'vue'

const isInputVisible = ref(false) // To control input visibility
const query = ref('') // To store the search query

// Function to toggle the search input visibility
const toggleSearch = () => {
  isInputVisible.value = !isInputVisible.value
}

// Function to hide the input (for example, when clicking outside)
const hideInput = () => {
  isInputVisible.value = false
}

// Function to perform the search (redirect to a search result page or handle within the same component)
const search = () => {
  if (query.value) {
    // You can modify the behavior based on what you want to achieve:
    // Redirecting to a new page with search results:
    window.location.href = `/search?search_query=${query.value}`

    // OR if you want to fetch and display results on the same page:
    fetch(`/search?search_query=${query.value}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the search results
        console.log(data)
      })
  } else {
    window.location.href = '/search' // Go to the home page if the query is empty
  }
}
</script>

<template>
  <div class="search-container">
    <font-awesome-icon icon="magnifying-glass" class="search-icon" @click="toggleSearch" />
    <form class="search-form" @submit.prevent="search">
      <input
        v-if="isInputVisible"
        type="text"
        v-model="query"
        name="search_query"
        placeholder="Search..."
        class="search-input"
        @blur="hideInput"
      />
    </form>
  </div>
</template>

<style scoped>
.search-container {
  position: relative;
  display: flex;
  align-items: center;
  margin: 15px;
}

.search-icon {
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.search-icon:hover {
  transform: scale(1.2);
}

.search-input {
  width: 350px;
  opacity: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
  transition:
    width 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}
</style>
