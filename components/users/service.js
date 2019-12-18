const userModel = require('./model');

const userService = { };

userService.testService = (req, res) => {
    try {
        return res.status(200).json({
            data: 'This is a response from user service'
        });
    } catch (error) {
        return res.status(500).json({
            data: error
        });
    }
};

/**
 * Service example function for search in the database using Sequelize
 * ORM and user model.
 */
userService.searchUsersInDatabase = async (req, res) => {
    try {
        const databaseSearchResult = await userModel.findAll();
        return res.status(200).json({
            data: databaseSearchResult
        });
    } catch (error) {
        return res.status(500).json({
            data: error
        });
    }
};

module.exports = userService;