//SQL Database connection throught Sequelize ORM
const Sequelize = require('sequelize');
const mongoose = require('mongoose');

const config = require('./config');

const databaseConnection = { };

databaseConnection.getSequelizeSQLConnection = async () => {
    try {
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
    } catch (error) {
        console.log(error);
    }
};

databaseConnection.getMongooseConnection = async () => {
    let mongooseDatabaseConnection = null;
    const mongooseUriConnection = `mongodb://${config.dbUsername}:${config.dbPassword}@${config.dbHost}:${config.port}/${config.dbName}`;

    try {
        mongooseDatabaseConnection = await mongoose.connect(mongooseUriConnection, {
            useNewUrlParser: true,
            poolSize: 10 
        });
    } catch (error) {
        console.log(error);
    }

    return mongooseDatabaseConnection;
};

module.exports = databaseConnection;