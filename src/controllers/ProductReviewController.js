const { ProductReviewService } = require("../services/index.js");

const productReviewService = new ProductReviewService();

const create = async (req, res) => {
    try {
        const response = await productReviewService.createProductReview(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Product review added successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not create product review",
            err: error
        })
    } 
}

const getAll = async (req, res) => {
    try {
        const { productId } = req.query;
        const response = await productReviewService.getProductReviews(productId);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Product reviews fetched successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch product reviews",
            err: error
        })
    }
}

module.exports = {
    create,
    getAll
}