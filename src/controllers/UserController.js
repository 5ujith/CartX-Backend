const { UserService } = require("../services/index.js");

const userService = new UserService();

const get = async (req, res) => {
    try {
        const {userName, password} = req.query;
        const response = await userService.getUser(userName, password);
        return res.status(200).json({
            data: response,
            success: true,
            message: "User retrieved successfully",
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in the controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not retrieve user",
            err: error
        })
    }
}

const create = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json({
            data: user,
            success: true,
            message: "User created successfully",
            err: {}
        })
    }
    catch(error) {
        console.log("Something went wrong in the controller layer");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not create user",
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        return res.status(200).json({
            data: user,
            success: true,
            message: "User updated successfully",
            err : {}
        });
    }
    catch(error) {
        console.log("Something went wrong in the controller layer of user");
        return res.status(500).json({
            data : {},
            success: false,
            message: "Could not update user",
            err: error
        })
    }
}

module.exports = {
    get,
    create,
    update
}