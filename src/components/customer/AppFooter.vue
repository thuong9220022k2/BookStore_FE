<template>
	<!-- Back to Top -->
	<!-- <a href="#" class="btn btn-primary border-3 border-primary rounded-circle back-to-top" @click="toggleChatbot"><i
			class="fa fa-commenting"></i></a> -->
	<ChatWindow />
	<!-- <ChatBot /> -->
	<!-- Footer Start -->
	<footer>
		<div class="container-fluid bg-dark text-light">
			<div class="row px-xl-5 pt-4 pb-2">
				<div class="col-lg-4 col-md-12 pr-3 pr-xl-5">
					<a href="" class="text-decoration-none">
						<h1 class="m-0 display-4 text-secondary"><span class="text-primary">B</span>Store</h1>
					</a>
					<p>Cửa hàng sach uy tin moi nhieu the loai sach da dang hap dan!</p>
					<p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i> 123 Hai Ba Trung Ha Noi</p>
					<p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i> info@gmail.com</p>
					<p class="mb-0"><i class="fa fa-phone-alt text-primary mr-3"></i> 02933 003 754</p>
				</div>
				<div class="col-lg-8 col-md-12 mt-3">
					<div class="row">
						<div class="col-md-4 mt-5">
							<h5 class="font-weight-bold text-light mb-4">Về chúng tôi</h5>
							<div class="d-flex flex-column justify-content-start">
								<a class="text-light mb-2" href="#">Di sản</a>
								<a class="text-light mb-2" href="#">Công ty</a>
								<a class="text-light" href="#">Cơ hội nghề nghiệp</a>
							</div>
						</div>
						<div class="col-md-4 mt-5">
							<h5 class="font-weight-bold text-light mb-4">Liên kết nhanh</h5>
							<div class="d-flex flex-column justify-content-start">
								<a class="text-light mb-2" href="/home">Trang chủ</a>
								<a class="text-light mb-2" href="/product_all">Đặt hàng</a>
								<a class="text-light" href="#">Liên hệ</a>
							</div>
						</div>
						<div class="col-md-4 mt-5">
							<img src="https://cdn1.concung.com/themes/desktop4.1/img/noticed@3x.png" height="75px"
								alt="">
						</div>
					</div>
				</div>
			</div>
			<div class="row border-top border-light mx-xl-5 py-4">
				<div class="col-md-6 px-xl-0">
					<p class="mb-md-0 text-lg-left">
						&copy; <a class="font-weight-semi-bold" href="#">BStore</a>.
					</p>
				</div>
				<div class="col-md-6 px-xl-0 d-flex flex-row-reverse">
				</div>
			</div>
		</div>
		<!-- Footer End -->
	</footer>
</template>

<script>
import ChatWindow from './ChatWindow.vue';

export default {
	components: {
		ChatWindow
	},
	data() {
		return {
			showChatbot: false,
		};
	},
	methods: {
		toggleChatbot() {
			console.log("clicked")
			this.showChatbot = !this.showChatbot;
			console.log(this.showChatbot)
		},
	},
}

</script>