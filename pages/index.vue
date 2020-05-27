<template>
    <section id="posts" class="container">
        <PostPreview
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            :excerpt="post.previewText"
            :thumbnailImage="post.thumbnailUrl"
            :id="post.id"
        ></PostPreview>
    </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";

export default {
    data() {
        return {
            posts: [
                {
                    title: "A New Beginning",
                    previewText: "This will be awesome, don't miss it",
                    thumbnailUrl:
                        "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466__480.jpg",
                    id: "1"
                },
                {
                    title: "Another one from Internet",
                    previewText: "This will be awesome, don't miss it",
                    thumbnailUrl:
                        "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404__480.jpg",
                    id: "2"
                }
            ]
        };
    },
    components: {
        PostPreview
    }
};
</script>

<style>
#posts {
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
}

@media (min-width: 35rem) {
    #posts {
        flex-direction: row;
    }
}
</style>
