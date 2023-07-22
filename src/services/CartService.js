const { CartRepository } = require("../repositories");

const cartRepository = new CartRepository();

class CartService {
    async createCartItem(data) {
        try {
            const item = await cartRepository.createCartItem(data);
            return item;
        }
        catch(error) {
            console.log("Something went wrong in service layer of cart");
            console.log(error);
            throw {error}
        }
    }

    async getCartItems(userId) {
        try {
            const items = await cartRepository.getCartItems(userId);
            return items;
        }
        catch(error) {
            console.log("Something went wrong in service layer of cart");
            console.log(error);
            throw {error}
        }
    }

    async deleteCartItem(id) {
        try {
            const response = await cartRepository.deleteCartItem(id);
            return response;
        }
        catch(error) {
            console.log("Something went wrong in service layer of cart");
            console.log(error);
            throw {error}
        }
    }

    async updateCartItem(data, id) {
        try {
            const item = await cartRepository.updateCartItem(data, id);
            return item;
        }
        catch(error) {
            console.log("Something went wrong in service layer of cart");
            console.log(error);
            throw {error}
        }
    }

    async getCartItem(productId) {
        try {
            const item = await cartRepository.getCartItem(productId);
            return item;
        }
        catch(error) {
            console.log("Something went wrong in service layer of cart");
            console.log(error);
            throw {error}
        }
    }
}

module.exports = CartService;