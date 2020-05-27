<template>
    <div>
        <section class="about-container">
            <h3>
                {{msg}}
                <el-button type="success">Test Button</el-button>
            </h3>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: "Hello from Nuxt"
        };
    }
};
</script>
<style scoped>
.about-container {
    padding: 2rem;
}
</style>