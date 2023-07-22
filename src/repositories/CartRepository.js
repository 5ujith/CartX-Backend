const { Cart, Product } = require('../models/index.js');

class CartRepository {
    async createCartItem(data) {
        try {
            const item = await Cart.create(data);
            return item;
        }
        catch(error) {
            console.log("Something went wrong in repository layer of cart");
            throw {error};
        }
    }

    async getCartItems(userId) {
        try {
            const items = await Cart.findAll({
                where: {
                    userId
                },
                include: {
                    model: Product
                }
            });
            return items;
        }
        catch(error) {
            console.log("Something went wrong in repository layer of cart");
            throw {error};
        }
    }

    async deleteCartItem(id) {
        try {
            const response = await Cart.destroy({
                where: {
                    id
                }
            })
            return response;
        }
        catch(error) {
            console.log("Something went wrong in the repository layer of cart");
            throw { error };
        }
    }

    async updateCartItem(data, id) {
        try {
            const item = await Cart.update({...data}, {
                where: {
                    id
                }
            })
            return item;
        }
        catch(error) {
            console.log("Something went wrong in the repository layer of cart");
            throw { error };
        }
    }

    async getCartItem(productId) {
        try {
            const item = await Cart.findOne({
                where: {
                    productId,
                }
            })
            return item;
        }
        catch(error) {
            console.log("Something went wrong in the repository layer of cart");
            throw { error };
        }
    }
} 

module.exports = CartRepository;