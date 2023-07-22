const { Order, OrderItem } = require("../models/index");

class OrderRepository {
    async createOrder(data) {
        try {
            const order = await Order.create(data);
            return order;
        }
        catch(error) {
            console.log("Could not create order");
            throw { error };
        }
    }

    async getOrders(userId) {
        try {
            const reviews = await Order.findAll({
                where: {
                    userId
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'] 
                },
                include: {
                    model: OrderItem, 
                }
            });
            return reviews;
        }
        catch(error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }
}

module.exports = OrderRepository;