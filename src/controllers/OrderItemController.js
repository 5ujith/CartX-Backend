const { OrderItemService } = require("../services/index.js");

const orderItemService = new OrderItemService();

const create = async (req, res) => {
    try {
        const response = await orderItemService.createOrderItem(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Order item added successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not create order item",
            err: error
        })
    } 
}

const getAll = async (req, res) => {
    try {
        const response = await orderItemService.getOrderItems(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Order Items fetched successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch order items",
            err: error
        })
    }
}

module.exports = {
    create,
    getAll
}