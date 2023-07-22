const { OrderRepository } = require("../repositories");

const orderRepository = new OrderRepository();

class OrderService {
    async createOrder(data) {
        try {
            const order = await orderRepository.createOrder(data);
            return order;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getOrders(userId) {
        try {
            const orders = await orderRepository.getOrders(userId);
            return orders;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
}

module.exports = OrderService;