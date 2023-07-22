const { CartService } = require("../services/index")

const cartService = new CartService();

const create = async (req, res) => {
    try {
        const response = await cartService.createCartItem(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Cart Item Created Successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer of cart");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not create cart item",
            err: error
        })
    } 
}

const getAll = async (req, res) => {
    try {
        const response = await cartService.getCartItems(req.query.userId);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Cart Items fetched Successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer of cart");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch cart items",
            err: error
        })
    } 
}

const destroy = async (req, res) => {
    try {
        const response = await cartService.deleteCartItem(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Cart Item deleted Successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer of cart");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not delete cart item",
            err: error
        })
    } 
}

const update = async (req, res) => {
    try {
        const response = await cartService.updateCartItem(req.body, req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Cart Item updated Successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer of cart");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not update cart item",
            err: error
        })
    } 
}

const get = async (req, res) => {
    try {
        const response = await cartService.getCartItem(req.query.productId);
        return res.status(200).json({
            data: response,
            valid: (response === null) ? false : true,
            success: true,
            message: 'Cart Item fetched Successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer of cart");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch cart item",
            err: error
        })
    } 
}

module.exports = {
    create,
    getAll,
    destroy,
    update,
    get,
}