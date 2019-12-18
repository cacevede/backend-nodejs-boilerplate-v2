'use strict'

const userModel = require('./model');

async function testService (req, res) {
    res.status(200).json({
        data: 'This is a response from user service'
    });
};

/**
 * Service example function for search in the database using Sequelize
 * ORM and user model.
 */
async function searchUsersInDatabase (req, res) {
    const databaseSearchResult = await userModel.findAll();
    
    res.status(200).json({
        data: databaseSearchResult
    });
};

module.exports = {
    testService,
    searchUsersInDatabase
};