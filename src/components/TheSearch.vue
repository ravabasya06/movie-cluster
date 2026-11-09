<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isInputVisible = ref(false) // To control input visibility
const query = ref('') // To store the search query

const toggleSearch = () => {
  isInputVisible.value = !isInputVisible.value
}

const hideInput = () => {
  isInputVisible.value = false
}

const search = () => {
  const keyword = query.value.trim()
  if (keyword) {
    router.push({ name: 'search', query: { search_query: keyword } })
  } else {
    router.push({ name: 'home' })
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
