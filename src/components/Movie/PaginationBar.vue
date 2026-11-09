<script setup>
import { computed } from 'vue'

const props = defineProps(['movies', 'query', 'genres'])

const currentPage = computed(() => props.movies.page)
const totalPages = computed(() => props.movies.total_pages)

// Number of pages to show around the current page
const pageNeighbors = 2

const pageRange = computed(() => {
  const startPage = Math.max(1, currentPage.value - pageNeighbors)
  const endPage = Math.min(totalPages.value, currentPage.value + pageNeighbors)
  const range = []

  for (let i = startPage; i <= endPage; i++) {
    range.push(i)
  }

  return range
})

const shouldShowFirst = computed(() => currentPage.value > pageNeighbors + 1)
const shouldShowLeftEllipsis = computed(() => currentPage.value > pageNeighbors + 2)
const shouldShowRightEllipsis = computed(
  () => currentPage.value < totalPages.value - pageNeighbors - 1
)
const shouldShowLast = computed(() => currentPage.value < totalPages.value - pageNeighbors)

// link to a page of the current search (keyword search or genre browse)
const pageLink = (page) => {
  const query = { page }
  if (props.query) {
    query.search_query = props.query
  } else if (props.genres?.length) {
    query.genres = props.genres.join(',')
  }
  return { name: 'search', query }
}
</script>
<template>
  <div class="page">
    <RouterLink v-if="currentPage > 1" :to="pageLink(currentPage - 1)">Previous</RouterLink>
    <RouterLink v-if="shouldShowFirst" :to="pageLink(1)">
      <span>1</span>
    </RouterLink>
    <span v-if="shouldShowLeftEllipsis">...</span>
    <RouterLink
      v-for="page in pageRange"
      :key="page"
      :to="pageLink(page)"
      :class="{ active: page === currentPage }"
    >
      <span>{{ page }}</span>
    </RouterLink>
    <span v-if="shouldShowRightEllipsis">...</span>
    <RouterLink v-if="shouldShowLast" :to="pageLink(totalPages)">
      <span>{{ totalPages }}</span>
    </RouterLink>
    <RouterLink v-if="currentPage < totalPages" :to="pageLink(currentPage + 1)">Next</RouterLink>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
}

.page a {
  text-decoration: none;
  color: white;
  border: 1px solid white;
  border-radius: 3px;
  padding: 10px;
}

.page a.active {
  border: 1px solid white;
  background-color: white;
  color: gray;
}

.page a:hover {
  border: 1px solid white;
  background-color: white;
  color: gray;
}

.page span {
  padding: 5px 10px;
}

.page span.active {
  background-color: #007bff;
  color: white;
}

.page span.ellipsis {
  cursor: default;
  pointer-events: none;
}
</style>
