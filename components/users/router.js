const router = require('express').Router();

// Here call the router file
const userService = require('./service');

// Here call the middlewares required
const exampleMiddleware = require('../../utils/middlewares/exampleMiddleware');

/** GET ROUTES COMPONENT */
router.get('/sayhiuser', exampleMiddleware.getMessageFromMiddleware, userService.testService);

/** POST ROUTES COMPONENT */

/** PUT ROUTES COMPONENT */

/** PATCH ROUTES COMPONENT */

/** DELETE ROUTES COMPONENT */

module.exports = router;