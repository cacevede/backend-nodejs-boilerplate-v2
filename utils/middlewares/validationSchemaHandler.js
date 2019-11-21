const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

const schemaValidatorHandler = { };

schemaValidatorHandler.validate = (data, schema) => {
    const { error } = joi.validate(data, schema);
    return error;
};

schemaValidatorHandler.validationHandler = (schema, check = 'body') => {
    return (req, res, next) => {
        const { error } = schemaValidatorHandler.validate(req[check], schema);

        error ? next(boom.badRequest(error)) : next();
    }
};

module.exports = schemaValidatorHandler;