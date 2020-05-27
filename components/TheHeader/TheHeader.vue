<template>
    <header class="main_header">
        <nav class="main_nav">
            <ul class="nav_links">
                <nuxt-link to="/" tag="li" class="nav_link">
                    <a>All posts</a>
                </nuxt-link>
                <nuxt-link to="/about" tag="li" class="nav_link">
                    <a>About</a>
                </nuxt-link>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
.main_header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #022d30;
    height: 4.5rem;
}
.main_nav {
    height: 100%;
}
.nav_links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.nav_link {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 0.3rem;
}
.nav_link a:hover,
.nav_link a {
    display: block;
    text-decoration: none;
    color: white;
}

.nav_link a:hover,
.nav_link a:active,
.nav_link.nuxt-link-exact-active a {
    color: rgb(19, 164, 231);
}
.nuxt-link-exact-active {
    border-bottom: 3px solid #06c4d1;
}
</style>