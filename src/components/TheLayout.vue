<script setup>
import TheNav from './TheNav.vue'
import TheFooter from './TheFooter.vue'
</script>

<template>
  <main>
    <header>
      <TheNav />
    </header>
    <article>
      <slot />
    </article>
    <footer>
      <TheFooter />
    </footer>
  </main>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh);
}
</style>
