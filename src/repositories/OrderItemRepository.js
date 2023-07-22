const { OrderItem, Product } = require("../models/index");

class OrderItemRepository {
    async createOrderItem(data) {
        try {
            const orderItem = await OrderItem.bulkCreate(data);
            return orderItem;
        }
        catch(error) {
            console.log("Could not create order");
            throw { error };
        }
    }

    async getOrderItems(orderId) {
        try {
            const orderItems = await OrderItem.findAll({
                where: {
                    orderId
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'] 
                },
                include: {
                    model: Product, 
                }
            });
            return orderItems;
        }
        catch(error) {
            console.log("Something went wrong in repository layer");
            console.log(error);
            throw { error };
        }
    }
}

module.exports = OrderItemRepository;