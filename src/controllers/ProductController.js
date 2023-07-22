const { ProductService } = require("../services");

const productService = new ProductService();

const create = async (req, res) => {
    try {
        const response = await productService.createProduct(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Product created successfully',
            err: {}
        })
    }
    catch(error) {
        console.log('Something went wrong in Controller layer');
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not create product',
            err: error
        })
    }
}

const createProductDetail = async (req, res) => {
    try {
        const response = await productService.createProductDetail(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Product Details created successfully',
            err: {}
        })
    }
    catch(error) {
        console.log('Something went wrong in Controller layer');
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not create product details',
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const response = await productService.getProducts();
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Products retrieved successfully',
            err: {}
        })
    }
    catch(error) {
        console.log('Something went wrong in Controller layer');
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not retrieve products',
            err: error
        })
    }
}

const getAllByName = async (req, res) => {
    try {
        const response = await productService.getProductsByName(req?.query?.productName);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Products retrieved successfully',
            err: {}
        })
    }
    catch(error) {
        console.log('Something went wrong in Controller layer');
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not retrieve products',
            err: error
        })
    }
}

const getAllByCategory = async (req, res) => {
    try {
        const response = await productService.getProductsByCategory(req?.query?.categoryId);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Products retrieved successfully',
            err: {}
        })
    }
    catch(error) {
        console.log('Something went wrong in Controller layer');
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not retrieve products',
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await productService.updateProduct(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Product updated successfully',
            err: {}
        })
    }
    catch(error) {
        console.log('Something went wrong in Controller layer');
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not update product',
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const response = await productService.getProduct(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Product retrieved successfully',
            err: {}
        })
    }
    catch(error) {
        console.log('Something went wrong in Controller layer');
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Could not retrieve product',
            err: error
        })
    }

}

module.exports = {
    create,
    getAll,
    update,
    get,
    createProductDetail,
    getAllByName,
    getAllByCategory
}