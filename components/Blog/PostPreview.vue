<template>
    <div>
        <nuxt-link :to="'posts/'+id">
            <article class="post-preview">
                <div
                    :style="{backgroundImage: 'url(' + thumbnailImage + ')'}"
                    class="post-preview-thumbnail"
                ></div>
                <div class="post-preview-content">
                    <h1>{{title}}</h1>
                    <p>{{excerpt}}</p>
                </div>
            </article>
        </nuxt-link>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        excerpt: {
            type: String,
            required: true
        },
        thumbnailImage: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    }
};
</script>
<style scoped>
a {
    text-decoration: none;
    color: black;
}
.post-preview {
    border-radius: 3px;
    width: 90%;
    margin: auto;
    height: 20rem;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
}

.post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
}

.post-preview-content {
    text-align: center;
    padding: 3rem;
}
@media (min-width: 35rem) {
    .post-preview {
        width: 25rem;
        margin: 1rem;
    }
}
</style>