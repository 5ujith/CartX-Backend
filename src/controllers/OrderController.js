const { OrderService } = require("../services/index.js");

const orderService = new OrderService();

const create = async (req, res) => {
    try {
        const response = await orderService.createOrder(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Order created successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not create order",
            err: error
        })
    } 
}

const getAll = async (req, res) => {
    try {
        const response = await orderService.getOrders(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Orders fetched successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch orders",
            err: error
        })
    }
}

module.exports = {
    create,
    getAll
}