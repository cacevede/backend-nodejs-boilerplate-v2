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
const chalk = require('chalk')

/** REQUIRED DATABASE CONNECTION DEPENDENCIE */
const mongooseConnection = require('./configs/mongoose')

/** INITS */
const server = express();

/** MONGOOSE CONNECTION */
mongooseConnection()

/** MIDDLEWARES */

    /** CORS config */
server.use(cors(setCorsConfig()));

    /** Morgan Instance and Winston Integration */
server.use(morgan('combined', { stream: winstonLogger.stream }));

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
function handleFatalError (err) {
    console.error(`${chalk.red('[fatal error]')} ${err.message}`);
    console.error(err.stack);
    process.exit(1);
}

process.on('uncaughtException', handleFatalError);
process.on('unhandledRejection', handleFatalError);