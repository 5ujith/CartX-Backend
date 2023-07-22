const { where } = require("sequelize");
const { User } = require("../models/index"); 

class UserRepository {
    async getUser(userName) {
        try {
            console.log(userName);
            const user = await User.findOne(
                {
                    where: { userName },
                },
            );
            return user;
        }
        catch(error) {
            console.log("User does not exist");
            throw { error }
        }
    }

    async createUser(data) {
        try {
            const user = await User.create(data);
            return user;
        }
        catch(error) {
            console.log("Unable to create user");
            throw { error }
        }
    }

    async updateUser(userId, data) {
        try {
            const response = await User.update({...data}, {
                where: {
                    id: userId
                }
            });
            return response;
        }
        catch(error) {
            console.log("Cannot update user details");
            throw { error };
        }

    }
}

module.exports = UserRepository;