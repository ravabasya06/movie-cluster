<script setup>
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
</script>

<template>
    <main>
        <header>
            <Nav />
        </header>
        <article>
            <slot />
        </article>
        <footer>
            <Footer />
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
