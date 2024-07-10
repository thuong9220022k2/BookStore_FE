<template>
    <div class="row gx-3">
        <div class="col-sm-6 col-md-6 col-lg-3 mb-3 p-1" v-for="(product, index) in products" :key="product._id">
            <div class="card card-span h-100 rounded-3">
                <img class="img-fluid rounded-3 h-100" :src="product.image" alt="" />

                <div class="card-body ps-2">
                    <router-link
                        :to="{ name: 'product.detail', params: { id: product._id, category: product.category_id } }">
                        <h5 class="card-title">{{ product.name }}</h5>
                    </router-link>
                    <div class="row justify-content-between">
                        <div class="col ps-3">
                            <p class="text-primary">{{ product.category.name }}</p>
                        </div>
                        <div class="col text-right">
                            <p class="text-mute">Đã bán: {{ product.quantity_sale }}</p>
                        </div>
                    </div>
                    <div class="row">
                        <h4 class="fw-bold text-danger col">{{ formatPrice(product.price) }}</h4>
                        <a class="col text-right" style="cursor: pointer;" @click="addToCart(
                            {
                                _id: product._id,
                                name: product.name,
                                description: product.description,
                                price: product.price,
                                image: product.image,
                                quantity_sale: 1,
                                category_id: product.category._id,
                            }
                        )" :disabled="product.quantity_remain === 0">

                            <i class="fas fa-cart-plus h4"></i>
                        </a>
                    </div>

                    <!-- <span class="text-1000 fw-bold"></span> -->
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import CustomerService from "@/services/customer.service";
import { useCustomerStore } from '@/stores/store';
import { useToast } from 'vue-toast-notification';

export default defineComponent({
    props: {
        products: { type: Array, required: true },
    },
    setup(props, context) {
        const toast = useToast();
        const quantity_sale = ref(Array(props.products.length).fill(1));
        const store = useCustomerStore();
        const router = useRouter();
        const addToCart = async (data) => {
            console.log(data);
            if (store.isAuthenticatedCustomer) {
                try {
                    const response = await CustomerService.addToCart(data);
                    localStorage.setItem("user", JSON.stringify(response.user));
                    toast.success('Thêm vào giỏ hàng thành công!', { timeout: 1500 });
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

        return {
            formatPrice,
            addToCart,
            quantity_sale,
        };
    },
});
</script>
<style>
.fa-star {
    color: orange;
    font-size: 13px;
}

.text-right {
    text-align: right;
}
</style>
