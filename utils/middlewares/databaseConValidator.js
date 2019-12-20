/** VALIDATE DATABASE CONNECTION */
'use strict'

//const { getSequelizeSQLConnection } = require('../../configs/databaseConnection');
const mongoose = require('mongoose');

function testSQLConnection (dbConnection) {
    dbConnection.authenticate()
        .then(() => {
            console.log('Connection to the SQL databse has been established successfully');
        })
        .catch((error) => {
            console.log(`Connection Fail to the SQL database ${error}`);
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