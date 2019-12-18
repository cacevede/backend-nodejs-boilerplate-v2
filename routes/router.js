/** REQUIRED PROD DEPENDENCIES */
const express = require('express');

const serverRoutes = express();

// Your routes call here
serverRoutes.use('/users', require('../components/users/router'));

module.exports = serverRoutes;