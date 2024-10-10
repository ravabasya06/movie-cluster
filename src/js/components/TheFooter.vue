<template>
    <div class="footer">
        <div class="footer-box">
            <img
                class="logo"
                src="../../../public/images/Logo-Movclus.png"
                alt="logo"
            />
            <p>
                Movie Cluster is a Movie Database made for a project to learn
                how API works with the help of TMDB's Open API in which you can
                find the source on the link down below
            </p>
        </div>
        <div class="links">
            <Link
                href="https://developer.themoviedb.org/reference/intro/getting-started"
                >TMDB API</Link
            >
            <Link href="https://github.com/ravabasya06/movie-cluster"
                >GitHub</Link
            >
        </div>
        <p>&copy; Movie Cluster 2024</p>
    </div>
</template>

<style scoped>
.footer p {
    margin: 0;
}
.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    bottom: 0;
    width: 100%;
    margin: 0;
    gap: 50px;
    padding: 30px;
}
.footer-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.footer-box p {
    max-width: 30%;
    margin: 0;
}
.logo {
    padding: 15px;
    width: 250px;
}
.footer a {
    color: white;
}
.links {
    display: flex;
    flex-direction: row;
    gap: 30px;
}
</style>
