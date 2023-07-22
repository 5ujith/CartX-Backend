const { OrderItemRepository } = require("../repositories");

const orderItemRepository = new OrderItemRepository();

class OrderItemService {
    async createOrderItem(data) {
        try {
            const orderItem = await orderItemRepository.createOrderItem(data);
            return orderItem;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getOrderItems(orderId) {
        try {
            const orderItems = await orderItemRepository.getOrderItems(orderId);
            return orderItems;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
}

module.exports = OrderItemService;