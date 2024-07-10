<template>
    <div id="app">
        <div class="reviews">
            <div class="review" v-for="(review, index) in state.reviews" :key="index">
                <div class="header">
                    <div class="author">{{ review.author }}</div>
                    <div class="date">{{ formatDate(review.date) }}</div>
                </div>
                <div class="content">{{ review.content }}</div>
            </div>
        </div>
        <div class="feedback">
            <h5>Đánh giá</h5>
            <form @submit.prevent="handleSubmitReview">
                <textarea id="content" v-model="newReviewContent" required></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import { defineComponent, onMounted, ref, watch, reactive, computed } from 'vue';
import { useToast } from 'vue-toast-notification';
import { useRouter } from "vue-router";
import ProductService from "@/services/product.service";
import { useCustomerStore } from '@/stores/store';
export default {
    name: 'ReviewProduct',
    props: {
        id: { type: String, required: true },
    },
    setup(props) {
        const state = reactive({
            reviews: [],
            newReview: {},
        });

        const toast = useToast();
        const router = useRouter();
        const store = useCustomerStore();

        const formatDate = (date) => {
            return moment(date).format('MMMM D, YYYY');

        };

        onMounted(async () => {
            try {
                console.log('id product', props.id);
                const response = await ProductService.getReviewProduct(props.id);
                console.log("response", response)
                state.reviews = response;
                console.log("sate review", state.reviews)
            } catch (error) {
                toast.error('Failed to fetch reviews');
            }
        });

        const userLocal = JSON.parse(localStorage.getItem('user'));
        console.log("userLocal", userLocal)
        const name = ref(userLocal.name);
        console.log("name", name.value)
        const date = new Date();
        const dateFormat = formatDate(date);
        const newReviewContent = ref('');

        const handleSubmitReview = async () => {
            try {
                if (!store.isAuthenticatedCustomer) {
                    toast.error('Please login to submit review');
                    router.push('/signin');
                    return;
                }
                console.log("newReviewContent", newReviewContent.value)
                const newReview = {
                    id: userLocal._id,
                    author: name.value,
                    content: newReviewContent.value,
                    date: dateFormat,
                };
                newReviewContent.value = '';

                const response = await ProductService.addReviewProduct(props.id, newReview);
                if (response.message === 'success') {
                    state.reviews.push(state.newReview);
                    state.newReview = {};
                }
            } catch (error) {
                toast.error('Failed to submit review');
            }
        };

        return {
            state,
            toast,
            watch,
            router,
            formatDate,
            handleSubmitReview,
            newReviewContent,
        };
    },
};
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
    width: 100%;
}

.rating {
    display: flex;
    align-items: left;
    justify-content: flex-start;
    margin-bottom: 20px;
    width: 100%;
}

.score {
    font-size: 24px;
    font-weight: bold;
    margin-right: 10px;
}

.stars {
    display: flex;
    align-items: center;
}

.star {
    margin-right: 5px;
    color: #ddd;
}

.star i {
    font-size: 18px;
}

.reviews {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}

.review {
    width: 100%;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: left;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: left;
    margin-bottom: 10px;
}

.author {
    font-weight: bold;
}

.date {
    font-size: 12px;
    color: #777;
}

.content {
    text-align: left;
}

.feedback {
    margin-top: 20px;
    width: 100%;
    text-align: left;
}

.feedback form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}

.feedback label {
    margin-bottom: 10px;
}

.feedback input,
.feedback textarea,
.feedback select {
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.feedback button[type="submit"] {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.feedback button[type="submit"]:hover {
    background-color: #3e8e41;
}
</style>