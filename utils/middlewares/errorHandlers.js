const { config } = require('../../configs/config');
const boom = require('@hapi/boom');

const errorHandler = { };

errorHandler.withErrorStack = (error, stack) => {
    if (config.dev) {
        return { error, stack };
    }
    return error;
};

errorHandler.logErrors = (error, req, res, next) => {
    //console.log(error);
    next(error)
};

errorHandler.wrapErrors = (error, req, res, next) => {
    !error.isBoom ? next(boom.badImplementation(error)) : next(error);
};

errorHandler.errorHandler = (error, req, res) => {
    const { statusCode, payload } = error;
    res.status(statusCode).json(errorHandler.withErrorStack(payload, error.stack));
};

module.exports = errorHandler;