const winston = require('winston');

const winstonLevels = {
    error: 0, 
    warn: 1, 
    info: 2, 
    verbose: 3, 
    debug: 4, 
    silly: 5
};

const winstonOptions = {
    file: {
        level: winstonLevels.error,
        filename: '../logs/server.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false
    },
    console: {
        level: winstonLevels.verbose,
        handleExceptions: true,
        json: false,
        colorize: true
    },
    http: {}
};

const winstonConfig = { };

winstonConfig.winstonLogger = () => {
    const logger = new winston.Logger({
        transports: [
            new winston.transports.File(winstonOptions.file),
            new winston.transports.Console(winstonOptions.console)
        ],
        exitOnError: false
    });

    logger.stream = {
        write: (message, encoding) => { logger.info(message); }
    };

    return logger;
};

module.exports = winstonConfig;