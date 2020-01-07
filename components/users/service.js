'use strict'

// Here, import the Model to be used on this service:
const { User } = require('../../configs/sequelize');

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
    await User.create({
        name: 'Santiago'
    });

    const databaseSearchResult = await User.findAll();
    
    res.status(200).json({
        data: databaseSearchResult
    });
};

module.exports = {
    testService,
    searchUsersInDatabase
};