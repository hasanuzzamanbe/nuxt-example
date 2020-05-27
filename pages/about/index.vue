<template>
    <div>
        <h3>
            {{msg}}
           <el-button type="success">Test Button</el-button>
        </h3>
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