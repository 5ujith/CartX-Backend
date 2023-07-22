const { Brand } = require('../models/index.js');

class BrandRepository {
    async createBrand(data) {
        try {
            const brand = await Brand.create(data);
            return brand;
        }
        catch(error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }

    }
}

module.exports = BrandRepository;