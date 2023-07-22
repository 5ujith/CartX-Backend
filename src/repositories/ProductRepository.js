const { Product } = require('../models/index.js');
const { ProductDetail } = require('../models/index.js');
const { Op } = require("sequelize");

class ProductRepository {
    async createProduct(data) {
        try {
            const product = await Product.create(data);
            return product;
        }
        catch(error) {
            console.log('Something went wrong in Repository layer');
            throw { error };
        }
    }

    async getProducts() {
        try {
            const products = await Product.findAll();
            return products;
        }
        catch(error) {
            console.log('Something went wrong in Repository layer of products');
            throw { error };
        }
    }

    async getProduct(id) {
        try {
            const product = await Product.findByPk(id);
            const productDetail = await ProductDetail.findByPk(id);
            product.dataValues.about = productDetail.dataValues?.about;
            return product;
        }
        catch(error) {
            console.log('Something went wrong in Repository layer');
            throw { error };
        }
    }

    async updateProduct(id, data) {
        try {
            console.log(data);
            const product = await Product.update({...data}, {
                where: {
                    id: id,
                }
            });
            return product;
        }
        catch(error) {
            console.log('Something went wrong in Repository layer');
            throw { error };
        }
    }


    async createProductDetail(data) {
        try {
            const product = await ProductDetail.create(data);
            return product;
        }
        catch(error) {
            console.log('Something went wrong in Repository layer');
            throw { error };
        }
    }

    async getProductsByName(productName) {
        try {
            const products = await Product.findAll({
                where: {
                    name: {
                        [Op.like]: `%${productName}%`,
                    }
                }
            })
            return products;
        }
        catch(error) {
            console.log('Something went wrong in Repository layer');
            throw { error };
        }
    }
    
    async getProductsByCategory(categoryId) {
        try {
            console.log("i am in");
            const products = await Product.findAll({
                where: {
                    categoryId
                }
            })
            return products;
        }
        catch(error) {
            console.log('Something went wrong in Repository layer');
            throw { error };
        }
    }
}

module.exports = ProductRepository;
