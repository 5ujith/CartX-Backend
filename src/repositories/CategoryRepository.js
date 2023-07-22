const { Category } = require('../models/index.js');

class CategoryRepository {
    async createCategory(data) {
        try {
            const category = await Category.create(data);
            return category;
        }
        catch(error) {
            console.log("Something went wrong in repository layer of category");
            throw {error};
        }
    }

    async getAllCategories() {
        try {
            const categories = await Category.findAll();
            return categories;
        }
        catch(error) {
            console.log("Something went wrong in repository layer of category");
            throw {error};
        }
    }
}

module.exports = CategoryRepository;