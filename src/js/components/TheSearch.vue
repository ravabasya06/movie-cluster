<script setup>
// import { ref } from "vue";
// import { useForm, router } from "@inertiajs/vue3";

// const isInputVisible = ref(false);

// const toggleSearch = () => {
//     isInputVisible.value = !isInputVisible.value;
// };

// const hideInput = () => {
//     isInputVisible.value = false;
// };

// const query = ref("");

// const search = () => {
//     const form = useForm({
//         search_query: query.value,
//     });

//     if (query.value) {
//         form.get(route("search"));
//     } else {
//         router.visit("/");
//     }
// };
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
