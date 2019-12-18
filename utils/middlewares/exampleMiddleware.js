const testMiddleware = { };

testMiddleware.getMessageFromMiddleware = (req, res) => {
    res.status(200).json({
        data: 'This is a message from the Middleware'
    });
};

module.exports = testMiddleware;