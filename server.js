/** REQUIRED PROD DEPENDENCIES */
const express = require('express');
const cors = require('cors');

/** REQUIRED DEV DEPENDENCIES */
const morgan = require('morgan');

/** REQUIRED PROYECT FILES */
const { config } = require('./configs/config');
const { winstonLogger } = require('./configs/winstonConfig');
const { runServer } = require('./scripts/serverScript');
const { notFoundHandler } = require('./utils/middlewares/notFoundHandler');
const { logErrors, wrapErrors, errorHandler } = require('./utils/middlewares/errorHandlers');
//const { setCorsConfig } = require('./utils/middlewares/corsConfig');

    /** SQL Database test */
//const databaseConValidator = require('./utils/middlewares/databaseConValidator');

/** INITS */
const server = express();

/** SETS */
server.set('port', config.port || 3005);

/** MIDDLEWARES */

    /** CORS config */
server.use(cors());

    /** Morgan Instance and Winston Integration */
server.use(morgan('combined', { stream: winstonLogger().stream }));
    
    /** Sequelize test database SQL connection */
//server.use(databaseConValidator.testSQLConnection());

    /** Body parser set */
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

    /** Error handler middlewares */
server.use(logErrors);
server.use(wrapErrors);
server.use(errorHandler);

/** ROUTES */
server.use(config.apiVersion, require('./routes/router'));

    /** Not Found Handler - 404 */
server.use(notFoundHandler);

/** START SERVER */
runServer(server, server.get('port'));

/** PROCCESS HANDLER ERRORS */ 
process.on('unhandledRejection', (error) => {
    console.log(error);
    process.exit(1);
});