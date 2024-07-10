<template>
    <div v-if="product" class="page">
        <div class="container mb-1">
            <div class="row pt-5 ">
                <div class="col-sm-12 col-md-12 col-lg-5 text-center">
                    <img style="height:400px" :src="product.image" />
                </div>
                <div class="col-sm-10 col-md-12 col-lg-7 pb-2">
                    <header>
                        <div class="flex justify-center absolute items-center w-full flex-col">
                            <span class="text-secondary text-lg">
                                <router-link tag="span" class="text-lg cursor-pointer" to="/">
                                    Trang chủ
                                </router-link>
                                <router-link tag="span" class="text-lg cursor-pointer" to="/">
                                    / Sản phẩm/
                                </router-link>
                                {{ product.name }}
                            </span>
                        </div>
                    </header>
                    <div class="row">
                        <h3 class="pb-0 mb-3 col-12">
                            {{ product.name }}
                            <button class="btn btn-primary btn-sm text-white ms-4">{{ category.name }}</button>
                        </h3>
                    </div>

                    <div class="row">
                        <h2 class="col-3 text-danger">
                            {{ formatPrice(product.price) }}
                        </h2>
                        <p class="col-3 mb-0 pb-0"><i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </p>
                    </div>
                    <p>
                    </p>
                    <div class="row">
                        <p class="col-6"><b>Đã bán: </b>
                            {{ product.quantity_sale }}</p>
                    </div>
                    <p>
                        {{ product.description }}
                    </p>
                    <hr>

                    <p class="fw-bold col-3">SỐ LƯỢNG</p>
                    <div class="row ps-3"><input type="number" class="col-1 text-center" v-model="quantity_sale" min="1"
                            :max="product.quantity_remain" />
                        <p class="col-3 mb-0 text-muted">Kho:
                            {{ product.quantity_remain }}
                        </p>
                    </div>
                    <button class="btn-danger btn mt-3" @click="addToCart(
                        {
                            _id: product._id,
                            name: product.name,
                            description: product.description,
                            price: product.price,
                            image: product.image,
                            quantity_sale: quantity_sale,
                            category_id: product.category_id,
                        }
                    )" :disabled="product.quantity_remain === 0 || quantity_sale > product.quantity">

                        <i class="fas fa-cart-plus"> </i> Thêm vào giỏ
                    </button>
                </div>
            </div>
            <div class="row pt-5">
                <div class="col-lg-12">
                    <h3 class="section-title position-relative mb-3">Thông tin sản phẩm</h3>
                    <div class="product-info">
                        <ul>
                            <li>
                                <span>Mã sản phẩm:</span>
                                <span>{{ product.code }}</span>
                            </li>
                            <li>
                                <span>Tên nhà cung cấp:</span>
                                <span>{{ product.supplier_name }}</span>
                            </li>
                            <li>
                                <span>Xuất xứ:</span>
                                <span>{{ product.origin }}</span>
                            </li>
                            <li>
                                <span>Trọng lượng:</span>
                                <span>{{ product.weight }} gr</span>
                            </li>
                            <li>
                                <span>Kích thước:</span>
                                <span>{{ product.size }} cm</span>
                            </li>
                            <li>
                                <span>Số trang:</span>
                                <span>{{ product.page_number }}</span>
                            </li>
                            <li>
                                <span>Hình thức:</span>
                                <span>{{ product.form }}</span>
                            </li>
                        </ul>
                        <div>
                            <p>
                                Giá sản phẩm trên BSTORE đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại
                                sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như Phụ
                                phí
                                đóng gói, phí vận chuyển, phụ phí hàng cồng kềnh,...
                                Chính sách khuyến mãi trên BSTORE không áp dụng cho Hệ thống Nhà sách BSTORE trên toàn
                                quốc
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row h-100 pt-5">
                <div class="row">
                    <div class="col-lg-6">
                        <h3 class="section-title position-relative mb-3">Sản phẩm tương tự </h3>
                    </div>
                </div>
                <div class="text-lg-right pb-2">
                    <a href="/product">
                        <h5 class="text-secondary">Xem tất cả ></h5>
                    </a>
                </div>
                <div class="col-12">
                    <Carousel v-bind="settings" :breakpoints="breakpoints">
                        <Slide v-for="product in state.products" :key="product._id">
                            <div class="card-item">
                                <img :src="product.image" alt="...">
                                <div class="card-body">
                                    <h5 class="fw-bold text-truncate mb-1">{{ product.name }}</h5>
                                    <div>
                                        <span class="text-warning me-2"><i class="fas fa-map-marker-alt"></i></span>
                                        <span class="text-primary">{{ category.name }}</span>
                                    </div>
                                    <span class="text-1000 fw-bold">{{ product.price }}đ</span>
                                </div>
                                <div class="d-grid gap-2 pt-2">
                                    <a class="btn btn-lg btn-danger" :href="'/product/' + product._id" role="button">Mua
                                        ngay</a>
                                </div>
                            </div>
                        </Slide>
                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                </div>
            </div>
            <div class="row pt-5">
                <h3 class="section-title position-relative mb-3">Đánh giá sản phẩm</h3>
                <div class="row">
                    <ReviewProduct :id="product._id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, ref, reactive, computed } from 'vue';
import ProductService from '@/services/product.service';
import CategoryService from '@/services/category.service';
import { useRouter } from "vue-router";
import CustomerService from "@/services/customer.service";
import ProductCard from '@/components/customer/ProductCard.vue';
import ReviewProduct from '@/components/customer/ReviewProduct.vue';
import { useCustomerStore } from '@/stores/store';
import { useToast } from 'vue-toast-notification';
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
    components: {
        ProductCard,
        ReviewProduct,
        Carousel,
        Navigation,
        Slide,
    },
    props: {
        id: { type: String, required: true },
    },
    mounted() {
        document.title = 'Chi tiết sản phẩm - BSTORE';
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
    }),
    setup(props) {
        const state = reactive({
            products: [],
        });

        const product = ref(null);
        const category = ref(null);
        const toast = useToast();
        const quantity_sale = ref(1);
        const store = useCustomerStore();
        const router = useRouter();
        const addToCart = async (data) => {
            console.log(data);
            if (store.isAuthenticatedCustomer) {
                try {
                    const response = await CustomerService.addToCart(data);
                    localStorage.setItem("user", JSON.stringify(response.user));
                    toast.success('Thêm vào giỏ hàng thành công!', { timeout: 1500 });
                    //router.push({ name: "cart" });
                }
                catch (error) {
                    console.log(error);
                }
            } else {
                router.push({
                    name: "signin",
                });
            }
        };

        const formatPrice = (price) => {
            return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
        };

        onMounted(async () => {
            product.value = await ProductService.get(props.id);
            category.value = await CategoryService.get(product.value.category_id);
        });
        const retrieveProducts = async () => {
            try {
                product.value = await ProductService.get(props.id);
                const relatedProducts = await ProductService.findByCategory(product.value.category_id);
                const products = relatedProducts.filter((item) => item.name !== product.value.name);
                state.products = products;
                console.log("relatedProduct", products)
            } catch (error) {
                console.log(error);
            }
        };

        retrieveProducts();
        return {
            state,
            category,
            product,
            formatPrice,
            retrieveProducts,
            addToCart,
            quantity_sale,
        };
    },
});
</script>
<style>
.fa-star {
    color: orange;
    font-size: 16px;
}

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

.product-info {
    background-color: #ffff;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 20px;
}

.product-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.product-info li {
    margin-bottom: 10px;
}

.product-info li span:first-child {
    font-weight: bold;
    width: 150px;
    display: inline-block;
}

.product-info li span:last-child {
    font-size: 16px;
}
</style>