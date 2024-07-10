import createApiClient from "./api.service";

class ProductService {
    constructor(baseUrl = "/api/product") {
        this.api = createApiClient(baseUrl);
    }
    async create(data) {
        return (await this.api.post("/", data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })).data;
    }
    async all() {
        return (await this.api.get("/")).data;
    }
    async get_new() {
        return (await this.api.get("/new")).data
    }
    async update(id, data) {
        return (await this.api.patch(`/${id}`, data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })).data;
    }
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    }
    async findByCategory(id) {
        return (await this.api.get(`/category/${id}`)).data;
    }
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }

    //Review
    async getReviewProduct(id) {
        return (await this.api.get(`/review/${id}`)).data;
    }

    async addReviewProduct(id, data) {
        return (await this.api.post(`/review/${id}`, data)).data;
    }
}

export default new ProductService;