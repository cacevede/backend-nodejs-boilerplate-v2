// Your router here
const serverRoutes = require('express').Router();

// Your routes call here
serverRoutes.use('/users', require('../components/users/router'));

module.exports = serverRoutes;