'use strict'

//SQL Database connection throught Sequelize ORM
const Sequelize = require('sequelize');
const mongoose = require('mongoose');

const config = require('./config');

async function getSequelizeSQLConnection () {
    const sequelizeDatabaseConnection = new Sequelize(
        config.dbName,
        config.dbUsername,
        config.dbPassword,
        {
            host: config.dbHost,
            dialect: config.dbDialect
        }
    );

    return sequelizeDatabaseConnection;
};

async function getMongooseConnection  () {
    let mongooseDatabaseConnection = null;
    const mongooseUriConnection = `mongodb://${config.dbUsername}:${config.dbPassword}@${config.dbHost}:${config.port}/${config.dbName}`;

    mongooseDatabaseConnection = await mongoose.connect(mongooseUriConnection, {
        useNewUrlParser: true,
        poolSize: 10 
    });

    return mongooseDatabaseConnection;
};

module.exports = {
    getSequelizeSQLConnection,
    getMongooseConnection
};