const sequelizeDatabaseConnection = require('../../configs/databaseConnection');

const databaseConValidation = { };

databaseConValidation.testSQLConnection = (res, req, next) => {
    sequelizeDatabaseConnection
        .authenticate()
        .then(() => {
            res.status(200).json({
                data: 'Connection to the database has been established successfully'
            });
        })
        .catch((error) => {
            res.status(500).json({
                data: 'Database connection failed',
                error
            });
        });
};

/** 
 * Add to databaseConValidation object a function 
 * to validate connection to No-SQL database like Mongo
 */

 module.exports = databaseConValidation;