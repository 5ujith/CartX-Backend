const { ProductReview, User } = require('../models/index.js');

class ProductReviewRepository {
    async createProductReview(data) {
        try {
            const review = await ProductReview.create(data);
            return review;
        }
        catch(error) {
            console.log("Something went wrong in repository layer");
            throw { error };
        }
    }

    async getProductReviews(productId) {
        try {
            const reviews = await ProductReview.findAll({
                where: {
                    productId
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt'] 
                },
                include: {
                    model: User, 
                    attributes: ['userName']
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

module.exports = ProductReviewRepository;