<template>
    <div class="container-fluid py-5">
        <div class="container py-5">
            <h1>Khám phá theo danh mục</h1>
            <div class="row">
                <div class="col-lg-3 col-md-6" v-for="item in items" :key="item.id">
                    <img :src="item.image" :alt="item.name" class="img-fluid">
                    <h3 class="mt-3">{{ item.name }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: 1, name: "English Books", image: "https://i.imgur.com/5X4jZvN.jpg" },
                { id: 2, name: "Sách tiếng Việt", image: "https://i.imgur.com/6p8kZf9.jpg" },
                { id: 3, name: "Văn phòng phẩm", image: "https://i.imgur.com/2i1nZ7s.jpg" },
                { id: 4, name: "Quà lưu niệm", image: "https://i.imgur.com/5h6jW1H.jpg" },
            ],
        };
    },
};
</script>

<style scoped>
/* Add some basic styling to make it look better */
.container-fluid {
    background-color: #f5f5f5;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.row {
    justify-content: center;
}

.col-lg-3 {
    margin-bottom: 20px;
}

img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
}

h3 {
    text-align: center;
    margin-top: 10px;
}
</style>