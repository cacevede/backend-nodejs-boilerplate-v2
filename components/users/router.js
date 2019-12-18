'use strict'

const router = require('express').Router();
const { catchErrors } = require('../../utils/middlewares/errorHandlers')

// Here call the router file
const { testService } = require('./service');

// Here call the middlewares required
const exampleMiddleware = require('../../utils/middlewares/exampleMiddleware');

/** GET ROUTES COMPONENT */
router.get('/sayhiuser', exampleMiddleware, catchErrors(testService));

/** POST ROUTES COMPONENT */

/** PUT ROUTES COMPONENT */

/** PATCH ROUTES COMPONENT */

/** DELETE ROUTES COMPONENT */

module.exports = router;