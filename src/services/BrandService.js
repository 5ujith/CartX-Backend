const { BrandRepository } = require("../repositories")

const brandRepository = new BrandRepository();

class BrandService {
    async createBrand(data) {
        try {
            const brand = await brandRepository.createBrand(data);
            return brand;
        }
        catch(error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
}

module.exports = BrandRepository;