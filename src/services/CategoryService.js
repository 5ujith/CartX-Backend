const { CategoryRepository } = require("../repositories");

const categoryRepository = new CategoryRepository();

class CatgeoryService {
    async createCategory(data) {
        try {
            const response = await categoryRepository.createCategory(data);
            return response;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getAllCategories() {
        try {
            const categories = await categoryRepository.getAllCategories();
            return categories;
        }
        catch(error) {
            console.log("Something went wrong in service layer of category");
            throw { error };
        }
    }
}

module.exports = CatgeoryService;