<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12 col-sm-3 pe-5">
                <CategoryCard :categories="state.categories" :selectedCategory="state.selectedCategory"
                    @filter:category="setSelectedCategory" />
            </div>
            <div class="col">
                <ProductCard v-if="state.products.length > 0" :products="filteredProducts" />
                <div v-else class="text-center">Loading...</div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-12">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" :class="{ disabled: currentPage === 1 }">
                            <a class="page-link" href="#" @click.prevent="prevPage">Previous</a>
                        </li>
                        <li class="page-item" v-for="page in totalPages" :key="page"
                            :class="{ active: page === currentPage }">
                            <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
                        </li>
                        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                            <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, computed } from 'vue';
import ProductService from "@/services/product.service";
import CategoryService from "@/services/category.service";
import ProductCard from '@/components/customer/ProductCard.vue';
import CategoryCard from '@/components/customer/CategoryCard.vue';

export default defineComponent({
    components: {
        ProductCard,
        CategoryCard,
    },
    mounted() {
        document.title = 'Sản phẩm - BSTORE';
    },
    setup(props, context) {
        const state = reactive({
            products: [],
            categories: [],
            selectedCategory: null,
            currentPage: 1,
            pageSize: 10,
        });

        const retrieveProducts = async () => {
            try {
                state.products = await ProductService.all();
            } catch (error) {
                console.log(error);
            }
        };
        const retrieveCategories = async () => {
            try {
                state.categories = await CategoryService.all();
            } catch (error) {
                console.log(error);
            }
        };
        const filteredProducts = computed(() => {
            if (!state.selectedCategory) {
                return state.products.slice((state.currentPage - 1) * state.pageSize, state.currentPage * state.pageSize);
            }
            return state.products.filter(product => product.category._id === state.selectedCategory._id).slice((state.currentPage - 1) * state.pageSize, state.currentPage * state.pageSize);
        });

        const totalPages = computed(() => {
            if (!state.selectedCategory) {
                return Math.ceil(state.products.length / state.pageSize);
            }
            return Math.ceil(state.products.filter(product => product.category._id === state.selectedCategory._id).length / state.pageSize);
        });

        const setSelectedCategory = (categories) => {
            state.selectedCategory = categories;
            state.currentPage = 1;
            console.log(state.selectedCategory);
        }

        const prevPage = () => {
            if (state.currentPage > 1) {
                state.currentPage--;
            }
        };
        const nextPage = () => {
            if (state.currentPage < totalPages.value) {
                state.currentPage++;
            }
        };
        const changePage = (page) => {
            state.currentPage = page;
        };

        retrieveProducts();
        retrieveCategories();

        return {
            state,
            retrieveProducts,
            retrieveCategories,
            filteredProducts,
            totalPages,
            setSelectedCategory,
            prevPage,
            nextPage,
            changePage,
        }
    }
});
</script>