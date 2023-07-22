const { ProductReviewRepository } = require("../repositories");

const productReviewRepository = new ProductReviewRepository();

class ProductReviewService {
    async createProductReview(data) {
        try {
            const review = await productReviewRepository.createProductReview(data);
            return review;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getProductReviews(productId) {
        try {
            const reviews = await productReviewRepository.getProductReviews(productId);
            return reviews;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
}

module.exports = ProductReviewService;