'use strict'

const { config } = require('../../configs/config');
const boom = require('@hapi/boom');

function catchErrors (fn) {
    return (req, res, next) => {
      return fn(req, res, next).catch(next);
    };
};

function withErrorStack (error, stack) {
    if (config.dev) {
        return { error, stack };
    }
    return error;
};

function logErrors (error, req, res, next) {
    console.log(error);
    next(error)
};

function wrapErrors (error, req, res, next) {
    !error.isBoom ? next(boom.badImplementation(error)) : next(error);
};

function errorHandler (error, req, res) {
    const { statusCode, payload } = error;
    res.status(statusCode).json(withErrorStack(payload, error.stack));
};

module.exports = {
    catchErrors,
    logErrors,
    wrapErrors,
    errorHandler
};