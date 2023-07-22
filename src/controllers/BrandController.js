const { BrandService } = require("../services")

const brandService = new BrandService();

const create = async (req, res) => {
    try {
        const response = await brandService.createBrand(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Brand created successfully',
            err: {}
        })
    }
    catch(error) {
        console.log('Something went wrong in Controller layer');
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not create brand',
            err: error
        })
    }
}

module.exports = {
    create
}