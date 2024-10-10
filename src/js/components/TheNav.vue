<script setup>
import Search from "./Search.vue";
</script>

<template>
    <nav class="navbar">
        <div class="left-group">
            <Link href="/">
                <img
                    class="logo"
                    src="../../../public/images/Logo-Movclus.png"
                    alt="logo"
                />
            </Link>
        </div>
        <div class="right-group">
            <Link href="/search" class="genre-button">
                <font-awesome-icon icon="folder-open" />
                Genres
            </Link>
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
