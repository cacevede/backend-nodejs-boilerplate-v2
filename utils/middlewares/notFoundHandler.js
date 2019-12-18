'use strict'

/** VALIDATE SERVER ROUTES AND HANDLED 404 SERVER ERROR */

const boom = require('@hapi/boom');

module.exports = function notFoundHandler (req, res) {
    const { output: { statusCode, payload } } = boom.notFound();
    res.status(statusCode).json(payload);
};