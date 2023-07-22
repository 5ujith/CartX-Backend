const { ProductRepository } = require("../repositories");
 
const productRepository = new ProductRepository();

class ProductService {
    async createProduct(data) {
        try {
            const product = await productRepository.createProduct(data);
            return product;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async createProductDetail(data) {
        try {
            const product = await productRepository.createProductDetail(data);
            return product;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getProducts() {
        try {
            const products = await productRepository.getProducts();
            return products;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async updateProduct(id, data) {
        try {
            const product = await productRepository.updateProduct(id, data);
            return product;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getProduct(id) {
        try {
            const product = await productRepository.getProduct(id);
            return product;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getProductsByName(productName) {
        try {
            const products = await productRepository.getProductsByName(productName);
            return products;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getProductsByCategory(categoryId) {
        try {
            const products = await productRepository.getProductsByCategory(categoryId);
            return products;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
}

module.exports = ProductService;