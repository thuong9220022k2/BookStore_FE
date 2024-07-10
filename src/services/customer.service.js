import createApiClient from "./api.service";

class CustomerService {
  constructor(baseUrl = "/api/customer") {
    this.api = createApiClient(baseUrl);
  }
  async signUp(data) {
    return (await this.api.post("/signup", data)).data;
  }
  async signIn(data) {
    return (await this.api.post("/signin", data)).data;
  }
  async signOut() {
    return (await this.api.post("/signout")).data;
  }
  async findAll() {
    return (await this.api.get("/")).data;
  }
  async findId(id) {
    return (await this.api.get(`/customer/${id}`)).data;
  }
  async changePassword(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }
  async update(id, data) {
    return (await this.api.patch(`/account/${id}`, data)).data;
  }

  // Cart
  async getCustomer() {
    return (await this.api.get("/cart")).data;
  }
  async deleteProductFromCart(id) {
    return (await this.api.delete(`/cart/product/${id}`)).data;
  }
  async updateProductQuantityFromCart(id, data) {
    return (await this.api.patch(`/cart/product/${id}`, data)).data;
  }
  async addToCart(data) {
    return (await this.api.post("/cart", data)).data;
  }
  async deleteAllProductsFromCart() {
    return (await this.api.delete("/cart")).data;
  }

  //Payment 
  async payment(data) {
    console.log("data", data)
    return (await this.api.post("/checkout", data)).data;
  }
  async createVnpayUrl(data) {
    console.log("data vnpay", data)
    return (await this.api.post("/checkout/create_vnpay_url", data)).data;
  }

  async getVnpayReturn() {
    return (await this.api.get("/checkout/vnpay_return")).data;
  }
  async vnpayIpn() {
    return (await this.api.post("/checkout/vnpay_ipn")).data;
  }

}

export default new CustomerService();
