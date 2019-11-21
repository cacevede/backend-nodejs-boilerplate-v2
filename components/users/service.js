const userModel = require('./model');

const userService = { };

userService.testService = async (req, res, next) => {
    try {
        res.status(200).json({
            data: 'This is a response from user service'
        });
    } catch (error) {
        res.status(500).json({
            data: error
        });
    }
};

/**
 * Service example function for search in the database using Sequelize
 * ORM and user model.
 */
userService.searchUsersInDatabase = async (req, res, next) => {
    try {
        const databaseSearchResult = await userModel.findAll();
        res.status(200).json({
            data: databaseSearchResult
        });
    } catch (error) {
        res.status(500).json({
            data: error
        });
    }
};

module.exports = { userService };