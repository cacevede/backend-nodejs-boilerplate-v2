const testMiddleware = { };

testMiddleware.getMessageFromMiddleware = (req, res, next) => {
    res.status(200).json({
        data: 'This is a message from the Middleware'
    });
};