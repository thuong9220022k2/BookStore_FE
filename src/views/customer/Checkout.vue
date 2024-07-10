<template>
    <div class="container">
        <div class="row pt-5 pb-5">
            <div class="col-md-6">
                <h3 class="">Thông tin nhận hàng</h3>
                <form>
                    <div class="form-group">
                        <label for="name">Họ và tên:</label>
                        <input type="text" class="form-control" id="name" v-model="name" />
                    </div>
                    <div class="form-group">
                        <label for="phone">Số điện thoại:</label>
                        <input type="tel" class="form-control" id="phone" v-model="phone" />
                    </div>
                    <div class="form-group">
                        <label for="address">Địa chỉ:</label>
                        <input type="text" class="form-control" id="address" v-model="address" />
                    </div>
                    <div class="form-group">
                        <label for="note">Ghi chú (tùy chọn):</label>
                        <textarea class="form-control" id="note" v-model="note"></textarea>
                    </div>
                </form>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h4>Đơn hàng</h4>
                    </div>
                    <div class="card-body">
                        <div class="row mb-2">
                            <h5 class="col-6">Tính tạm: </h5>
                            <h5 class="col-6 text-end">{{ state.total }}</h5>
                        </div>
                        <div class="row mb-2">
                            <h5 class="col-6">Phí vận chuyển: </h5>
                            <h5 class="col-6 text-end">---</h5>
                        </div>
                        <div class="row mb-1 border-top pt-3">
                            <h5 class="col-6">Tổng thanh toán: </h5>
                            <h5 class="col-6 text-end">{{ state.total }}</h5>
                        </div>
                        <div class="row mt-4 ">
                            <h5 class="col-6"> Phương thức thanh toán </h5>
                        </div>
                        <form>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="cashOnDelivery"
                                    v-model="state.paymentMethod" value="Thanh toán khi nhận hàng" />
                                <label class="form-check-label" for="cashOnDelivery">Thanh toán khi nhận hàng</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="momoPayment"
                                    v-model="state.paymentMethod" value="Momo Payment" />
                                <label class="form-check-label" for="momoPayment">Momo Payment</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="vnpayPayment"
                                    v-model="state.paymentMethod" value="Vnpay Payment" />
                                <label class="form-check-label" for="vnpayPayment">Vnpay Payment</label>
                            </div>
                        </form>
                        <div class="col-12 mb-2 mt-4">
                            <button class="btn btn-primary" @click="handlePayment">Đặt hàng</button>
                            <p v-if="state.error" style="color: red">{{ state.error }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import CustomerService from "@/services/customer.service";
import OrderService from "@/services/order.service";
// import MomoService from "@/services/momo.service";
import VueJwtDecode from "vue-jwt-decode";
import { useRouter } from "vue-router";
import { useToast } from 'vue-toast-notification';
import Swal from 'sweetalert2';

export default defineComponent({
    props: {
        id: { type: Object, required: true }
    },
    setup() {
        const toast = useToast()
        const state = reactive({
            customer: [],
            paymentMethod: '',
            error: '',
            total: 0,
        })
        const userLocal = JSON.parse(localStorage.getItem("user"))
        const name = ref(userLocal.name);
        const phone = ref(userLocal.phone);
        const address = ref(userLocal.address);

        const handlePayment = async () => {
            if (state.paymentMethod === '') {
                state.error = 'Please select a payment method';
                return;
            }

            if (state.paymentMethod === 'Thanh toán khi nhận hàng') {
                console.log(state.paymentMethod)
                await addToOrder();
                state.error = '';
            } else if (state.paymentMethod === 'Momo Payment') {
                // Handle Momo payment
                console.log(state.paymentMethod)
                response = await handleMomoPayment();
                console.log(response)
                state.error = '';
            }
            else if (state.paymentMethod === 'Vnpay Payment') {

                const response = await createVnpayUrl()
                await addToOrder()
                const url = response.url
                window.location.href = url
                state.error = '';
            }
        };

        // const handleMomoPayment = async () => {
        //     // momoService.sendPaymentRequest(requestBody)
        //     try {
        //         // const orderInfo = 'Book Store Info';
        //         // const amount = '100';
        //         // const redirectUrl = 'http://localhost:3001/checkout';
        //         // const ipnUrl = 'https://webhook.site/b3088a6a-2d17-4f8d-a383-71389a6c600b';
        //         // const requestBody = MomoService.createPaymentRequest(orderInfo, amount, redirectUrl, ipnUrl);
        //         response = await CustomerService.payment()
        //         console.log(response)
        //         return response
        //     } catch {
        //         e => {
        //             console.log(e)

        //         }
        //     }

        // };

        const createVnpayUrl = async () => {
            try {
                const data = {
                    amount: state.total,
                    bankCode: '',
                    language: null
                };
                const response = await CustomerService.createVnpayUrl(data);
                return response
            } catch (error) {
                console.log(error)
            }
        }

        // const getVnPayUrl = async () => {
        //     try {
        //         const response = await CustomerService.getVnpayReturn()
        //         console.log("response from vnpay", response)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }

        const retrieveCustomer = async () => {
            try {
                const customer = await CustomerService.getCustomer();
                state.customer = customer;
                state.customer.cart.reduce((acc, product) => {
                    const price = product.price;
                    const quantity_sale = product.quantity_sale;
                    const total_temp = price * quantity_sale;
                    state.total += total_temp;
                }, 0);
            }
            catch (error) {
                console.log(error);
            }
        };

        const router = useRouter();
        const addToOrder = async () => {
            try {
                const token = localStorage.getItem("token");
                const decoded = VueJwtDecode.decode(token);
                const customer = await CustomerService.getCustomer(decoded.id);
                const result = await OrderService.addToOrder({
                    customer_id: customer._id,
                    name: name.value,
                    phone: phone.value,
                    address: address.value,
                    products: state.customer.cart,
                    payment_method: state.paymentMethod,
                    total: state.total,
                });
                if (result === "") {
                    Swal.fire({
                        icon: 'error',
                        title: 'Lỗi',
                        text: 'Số lượng sản phẩm trong kho không đủ.',
                    });
                }
                else {
                    const response = await CustomerService.deleteAllProductsFromCart();
                    localStorage.setItem("user", JSON.stringify(response.user));
                    state.customer = [];
                    state.total = 0;
                    router.push({ name: "order" });
                }
            }
            catch (error) {
                console.log(error);
            }

        }

        retrieveCustomer()
        console.log(userLocal)
        return {
            state,
            name,
            phone,
            address,
            retrieveCustomer,
            handlePayment,
            addToOrder
        };

    }
})
</script>