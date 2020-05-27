<template>
    <div>
        <el-row>
            <el-col :span="12" v-for="recipe in recipes" :key="recipe.id">
                <h1>{{recipe.title}}</h1>
                <p>{{recipe.description}}</p>
                <img :src="recipe.img" alt width="100%" height="300px" />
                <el-button type="primary" size="medium">click Here</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    asyncData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(() => {
                    recipes: [
                        {
                            id: 1,
                            title: "Chicken Jhal fry",
                            description: "This is spicy recipy",
                            img:
                                "https://www.recipetineats.com/wp-content/uploads/2020/02/Honey-Garlic-Chicken-Breast_5-SQ.jpg"
                        },
                        {
                            id: 2,
                            title: "Fish curry",
                            description: "This is bangladeshi food",
                            img:
                                "https://i.ytimg.com/vi/qfgL2hU6_3E/maxresdefault.jpg"
                        }
                    ];
                });
            }, 1500);
        });
    }
};
</script>