const router = require('express').Router();

// Here call the router file
const userServices = require('./service');

// Here call the middlewares required
const exampleMiddleware = require('../../utils/middlewares/testMiddleware');

/** GET ROUTES COMPONENT */
router.get('/sayhiuser', exampleMiddleware, userServices.testService);

/** POST ROUTES COMPONENT */

/** PUT ROUTES COMPONENT */

/** PATCH ROUTES COMPONENT */

/** DELETE ROUTES COMPONENT */

module.exports = { router };