/** VALIDATE DATABASE CONNECTION */
'use strict'

const { getSequelizeConnection } = require('../../configs/databaseConnection');
const mongoose = require('mongoose');

function testSQLConnection (req, res) {
    getSequelizeConnection
        .authenticate()
        .then(() => {
            res.status(200).json({
                data: 'Connection to the SQL databse has been established successfully'
            });
        })
        .catch((error) => {
            res.status(500).json({
                data: 'SQL database connection failed',
                error
            });
        });
};

function testNoSQLConnection (req, res) {
    mongoose.connection.on('error', (error) => {
        res.status(500).json({
            data: 'NoSQL database connection failed',
            error
        });
    });
}

module.exports = {
    testSQLConnection,
    testNoSQLConnection
};