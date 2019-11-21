const boom = require('@hapi/boom');

const notFoundHandler = { };

notFoundHandler.notFoundHandler = (req, res) => {
    const { output: { statusCode, payload } } = boom.notFound();
    res.status(statusCode).json(payload);
};

module.exports = notFoundHandler;