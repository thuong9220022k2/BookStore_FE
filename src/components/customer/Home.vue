<template>
    <!-- Carousel Start -->
    <div class="container-fluid p-0 mb-5 pb-5">
        <div id="header-carousel" class="carousel slide carousel-fade" data-bs-touch="false" data-bs-interval="false">
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="5000">
                    <img class="w-100" src="/src/assets/img/carousel-3.webp" alt="Image">
                </div>
                <div class="carousel-item" data-bs-interval="5000">
                    <img class="w-100" src="/src/assets/img/carousel-4.webp" alt="Image">
                </div>
            </div>
            <a class="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div class="btn btn-secondary px-0" style="width: 45px; height: 45px;">
                    <span class="carousel-control-prev-icon mb-n1"></span>
                </div>
            </a>
            <a class="carousel-control-next" href="#header-carousel" data-slide="next">
                <div class="btn btn-secondary px-0" style="width: 45px; height: 45px;">
                    <span class="carousel-control-next-icon mb-n1"></span>
                </div>
            </a>
        </div>
    </div>
    <!-- Carousel End -->
    <div class="container-fluid py-5">
        <div class="container ">
            <h2>Khám phá theo danh mục</h2>
            <div class="row py-5">
                <div class="col-lg-2 col-md-6" v-for="item in items" :key="item.id">
                    <div class="image-container">
                        <img :src="item.image" :alt="item.name" class="img-fluid rounded-circle">
                    </div>
                    <p class="text-center mt-3">{{ item.name }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Services Start -->
    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-6">
                    <h2 class="section-title position-relative mb-5"> Những tác giả nổi tiếng </h2>
                </div>
                <div class="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="owl-carousel row">
                        <div class="service-item col-3">
                            <div class="service-img mx-auto">
                                <img class="rounded-circle w-100 h-100 bg-light p-3"
                                    src="/src/assets/img/nguyennhatanh.jpg" style="object-fit: cover;">
                            </div>
                            <div class="position-relative text-center bg-light rounded p-4 pb-5"
                                style="margin-top: -75px;">
                                <h5 class="font-weight-semi-bold mt-5 mb-3 pt-5"> Nguyễn Nhật Ánh </h5>
                                <p style="height: 150px; overflow-x: auto;">Năm 2015 có thể coi là một năm “đại thắng”
                                    đối với nhà văn Nguyễn Nhật Anh. “Tôi thấy hoa vàng trên cỏ xanh” thu nhận thành
                                    công trên mức tưởng tượng khi được chuyển thể thành phim nhựa giới thiệu tới khán
                                    giả trong và ngoài nước. Bên cạnh sự phủ sóng mạnh mẽ của “Tôi thấy hoa vàng trên cỏ
                                    xanh”, những cuốn sách khác của nhà văn Nguyễn Nhật Ánh như: “Bảy bước tới mùa hè”,
                                    “Cô gái đến từ hôm qua”… cũng nhanh chóng trở thành “best-seller” ngay từ khi mới ra
                                    mắt.
                                </p>
                                <a href=""
                                    class="border-bottom border-secondary text-decoration-none text-secondary">Learn
                                    More</a>
                            </div>
                        </div>
                        <div class="service-item col-3">
                            <div class="service-img mx-auto">
                                <img class="rounded-circle w-100 h-100 bg-light p-3" src="/src/assets/img/trangha.jpg"
                                    style="object-fit: cover;">
                            </div>
                            <div class="position-relative text-center bg-light rounded p-4 pb-5"
                                style="margin-top: -75px;">
                                <h5 class="font-weight-semi-bold mt-5 mb-3 pt-5">Trang Hạ</h5>
                                <p style="height: 150px; overflow-x: auto;">Được biết đến trong vai trò là dịch giả của
                                    “Xin lỗi, em chỉ là con đĩ”, Trang Hạ được đông đảo bạn trẻ đón nhận với lối viết
                                    phóng khoáng, giọng điệu đanh thép và mạnh mẽ của mình.
                                </p>
                                <a href=""
                                    class="border-bottom border-secondary text-decoration-none text-secondary">Learn
                                    More</a>
                            </div>
                        </div>
                        <div class="service-item col-3">
                            <div class="service-img mx-auto">
                                <img class="rounded-circle w-100 h-100 bg-light p-3"
                                    src="/src/assets/img/nguyenphongviet.jpg" style="object-fit: cover;">
                            </div>
                            <div class="position-relative text-center bg-light rounded p-4 pb-5"
                                style="margin-top: -75px;">
                                <h5 class="font-weight-semi-bold mt-5 mb-3 pt-5">Nguyễn Phong Việt</h5>
                                <p style="height: 150px; overflow-x: auto;">“Đi qua thương nhớ”, “Sinh ra là để cô đơn”
                                    hay mới đây nhất là “Sống một cuộc đời bình thường” đều là những cuốn sách được yêu
                                    mến của Nguyễn Phong Việt.
                                </p>
                                <a href=""
                                    class="border-bottom border-secondary text-decoration-none text-secondary">Learn
                                    More</a>
                            </div>
                        </div>
                        <div class="service-item col-3">
                            <div class="service-img mx-auto">
                                <img class="rounded-circle w-100 h-100 bg-light p-3" src="/src/assets/img/anhkhang.jpg"
                                    style="object-fit: cover;">
                            </div>
                            <div class="position-relative text-center bg-light rounded p-4 pb-5"
                                style="margin-top: -75px;">
                                <h5 class="font-weight-semi-bold mt-5 mb-3 pt-5">Anh Khang</h5>
                                <p style="height: 150px; overflow-x: auto;">Sớm định hình phong cách riêng trong dòng
                                    văn học trẻ sôi động, Anh Khang - tác giả sinh năm 1987 được độc giả trẻ đón nhận
                                    qua những tựa sách “hot” như “Ngày trôi về phía cũ”, “Đường hai ngả người thương
                                    thành lạ” hay “Buồn làm sao buông”.
                                </p>
                                <a href=""
                                    class="border-bottom border-secondary text-decoration-none text-secondary">Learn
                                    More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Services End -->

    <section class="py-4 overflow-hidden">
        <div class="container">
            <div class="row h-100">
                <div class="row">
                    <div class="col-lg-6">
                        <h2 class="section-title position-relative mb-3">Sản phẩm mới ra mắt </h2>
                    </div>
                </div>
                <div class="text-lg-right pb-2">
                    <a href="/product">
                        <h5 class="text-secondary">Xem tất cả ></h5>
                    </a>
                </div>
                <div class="col-12">
                    <Carousel v-bind="settings" :breakpoints="breakpoints">
                        <Slide v-for="product in state.products" :key="product.id">
                            <div class="card-item">
                                <img :src="product.image" alt="...">
                                <div class="card-body">
                                    <h5 class="fw-bold text-truncate mb-1">{{ product.name }}</h5>
                                    <div>
                                        <span class="text-warning me-2"><i class="fas fa-map-marker-alt"></i></span>
                                        <span class="text-primary">{{ product.category.name }}</span>
                                    </div>
                                    <span class="text-1000 fw-bold">{{ product.price }}đ</span>
                                </div>
                                <div class="d-grid gap-2 pt-2">
                                    <a class="btn btn-lg btn-danger" href="#" role="button">Mua ngay</a>
                                </div>
                            </div>
                        </Slide>

                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>

    </section>


</template>
<script>
import { reactive } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import ProductService from "@/services/product.service";

export default {
    name: 'Breakpoints',
    components: {
        Carousel,
        Slide,
        Navigation,

    },
    setup: () => {
        const state = reactive({
            products: []
        })

        const retrieveProducts = async () => {
            try {
                state.products = await ProductService.all();
            } catch (error) {
                console.log(error);
            }
        }
        retrieveProducts()
        return {
            state,
            retrieveProducts
        }
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        breakpoints: {
            700: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },
            1296: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
        },
        items: [
            { id: 1, name: "Sách thiếu nhi", image: "https://res.cloudinary.com/dkny7in6p/image/upload/v1719848387/d7qlmjqgmrkuokpkimkj.webp" },
            { id: 2, name: "Sách tâm lý, tình cảm", image: "https://res.cloudinary.com/dkny7in6p/image/upload/v1719848866/jmmszy2dpxzbnkxitgbo.webp" },
            { id: 3, name: "Sách tôn giáo", image: "https://res.cloudinary.com/dkny7in6p/image/upload/v1719848992/jvvg1mrqvwpeznob47qk.webp" },
            { id: 4, name: "Sách dạy học", image: "https://res.cloudinary.com/dkny7in6p/image/upload/v1718809986/oxford_quio5p.jpg" },
            { id: 5, name: "Sách văn hoá xã hội", image: "https://res.cloudinary.com/dkny7in6p/image/upload/v1719849080/wh2ifihicarbrkggzilh.webp" },
            { id: 6, name: "Sách lịch sử", image: "https://res.cloudinary.com/dkny7in6p/image/upload/v1719849257/w7ljter7v5x0j1esxf4h.webp" },
            { id: 7, name: "Sách văn học viễn tưởng", image: "https://res.cloudinary.com/dkny7in6p/image/upload/v1719891805/3ea3c3a41c148952d1c054dd446672fb.jpg_nzpr2x.webp" },
            { id: 8, name: "Sách tiểu sử, tự truyện", image: "https://res.cloudinary.com/dkny7in6p/image/upload/v1719891749/46eba67a01e24b123f3e2b58e86a0cb5.png_pyiu2s.webp" },
            { id: 9, name: "Sách kinh dị, bí ẩn", image: "https://res.cloudinary.com/dkny7in6p/image/upload/v1719891860/537245847596c05389c272a093d8096d.jpg_rqxgp2.webp" },
            { id: 10, name: "Sách khoa học công nghệ", image: "https://res.cloudinary.com/dkny7in6p/image/upload/v1719892285/f4924e7a25060fe37b85a0debae2665f.jpg_hrckkf.webp" },
            { id: 11, name: "Sách kinh tế", image: "https://res.cloudinary.com/dkny7in6p/image/upload/v1718809962/havard_business_tblaqo.jpg" },
            { id: 12, name: "Sách truyền cảm hứng", image: "https://res.cloudinary.com/dkny7in6p/image/upload/v1719891979/2fd56c9ec4e9c5f2202cc6cda70c0d69.jpg_ne7r7i.webp" },
        ],
    }),
    mounted() {
        document.title = 'Trang chủ - BSTORE';
    }
}

</script>

<style>
.card-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    width: 95%;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-item img {
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}

.card-body {
    align-items: flex-start;
    padding: 16px;
}

.card-body h5 {
    font-size: 18px;
    margin-bottom: 8px;
}

.card-body span {
    font-size: 14px;
    color: #666;
}

.card-body .text-warning {
    color: #ffc107;
}

.card-body .text-primary {
    color: #337ab7;
}

.card-body .fw-bold {
    font-weight: bold;
}

.d-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
}

.d-grid .btn {
    width: 100%;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 10px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    cursor: pointer;
}

.d-grid .btn:hover {
    background-color: #c82333;
}

.image-container {
    width: 100px;
    /* adjust the width to your liking */
    height: 100px;
    /* adjust the height to your liking */
    border-radius: 50%;
    /* make the image container circular */
    overflow: hidden;
    /* hide the excess image parts */
    margin: 0 auto;
    /* center the image container */
}

.image-container img {
    width: 100%;
    /* make the image fill the container */
    height: 100%;
    /* make the image fill the container */
    object-fit: cover;
    /* scale the image to fit the container */
    border-radius: 50%;
    /* make the image circular */
}

.text-center {
    text-align: center;
    /* center the text */
}
</style>
