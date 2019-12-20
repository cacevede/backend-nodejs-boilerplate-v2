'use strict'

/** REQUIRED PROD DEPENDENCIES */
const express = require('express');
const cors = require('cors');

/** REQUIRED DEV DEPENDENCIES */
const morgan = require('morgan');

/** REQUIRED PROYECT FILES */
const { config } = require('./configs/config');
const winstonLogger = require('./configs/winstonConfig');
const runServer = require('./scripts/serverScript');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');
const { logErrors, wrapErrors, errorHandler } = require('./utils/middlewares/errorHandlers');
const setCorsConfig = require('./utils/middlewares/corsConfig');

    /** SQL Database Connection - Test */
const { getSequelizeSQLConnection } = require('./configs/databaseConnection');
const { testSQLConnection } = require('./utils/middlewares/databaseConValidator');

/** INITS */
const server = express();
const dbConnection = getSequelizeSQLConnection();

/** MIDDLEWARES */

    /** CORS config */
server.use(cors(setCorsConfig()));

    /** Morgan Instance and Winston Integration */
server.use(morgan('combined', { stream: winstonLogger.stream }));
    
    /** Sequelize test database SQL connection */
testSQLConnection(dbConnection);

    /** Body parser set */
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

/** ROUTES */
server.use(config.apiVersion, require('./routes/router'));

/** Not Found Handler - 404 */
server.use(notFoundHandler);

/** Error handler middlewares */
server.use(logErrors);
server.use(wrapErrors);
server.use(errorHandler);

/** START SERVER */
runServer(server, config.port);

/** PROCCESS HANDLER ERRORS */
process.on('unhandledRejection', error => {
    console.log(error)
    process.exit(1);
});