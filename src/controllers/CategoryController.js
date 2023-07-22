const CatgeoryService = require("../services/CategoryService")

const categoryService = new CatgeoryService();

const create = async (req, res) => {
    try {
        const response = await categoryService.createCategory(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Category Created Successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not create category",
            err: error
        })
    } 
}

const getAll = async (req, res) => {
    try {
        const response = await categoryService.getAllCategories(req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Categories fetched Successfully',
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not fetch categories",
            err: error
        })
    } 
}

module.exports = {
    create,
    getAll
}