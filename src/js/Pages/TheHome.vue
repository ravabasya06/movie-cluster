<script setup>
import Layout from "../Components/Layout.vue";
import MovieCarousel from "../Components/Home/MovieCarousel.vue";

defineProps(["popular_movies", "top_movies", "trending_movies"]);
</script>
<template>
    <Head title="Home" />
    <Layout>
        <MovieCarousel
            title1="Popular Today"
            title2="Top Movies"
            title3="Trending Today"
            :movies1="popular_movies"
            :movies2="top_movies"
            :movies3="trending_movies"
        />
    </Layout>
</template>
