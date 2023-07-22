const { UserRepository } = require("../repositories/index.js");

const userRepository = new UserRepository();

class UserService {
    async getUser(userName, password) {
        try {
            const user = await userRepository.getUser(userName);
            if(user.password === password) {
                Object.assign(user.dataValues, {valid: true});
            }
            else {
                Object.assign(user.dataValues, {valid: false});
            }
            return user;
        }
        catch(error) {
            console.log("Something went wrong in the service layer");
            throw { error }
        }
    }

    async createUser(data) {
        try {
            const user = await userRepository.createUser(data);
            return user;
        }
        catch(error) {
            console.log("Something went wrong in the service layer");
            throw { error }
        }
    }

    async updateUser(userId, data) {
        try {
            const response = await userRepository.updateUser(userId, data);
            return response;
        }
        catch(error) {
            console.log("Something went wrong in the Service layer of user");
            throw { error };
        }
    }
}

module.exports = UserService;