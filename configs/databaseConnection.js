//SQL Database connection throught Sequelize ORM
const Sequelize = require('sequelize');
const config = require('./config');

const databaseConnection = { };

databaseConnection.getSequelizeSQLConnection = () => {
    const sequelizeDatabaseConnection = new Sequelize(
        config.dbName,
        config.dbUsername,
        config.dbPassword,
        {
            host: config.dbHost,
            dialect: config.dbDialect
            /**
             * Here can be setted another database connection params
             * like the connection number pool. See Sequelize documentation
             * Camilo 11/20/2019
             */
        }
    );

    return sequelizeDatabaseConnection;
};

//Here must add connection to No-SQL database

module.exports = { databaseConnection };