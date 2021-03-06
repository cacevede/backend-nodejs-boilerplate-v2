'use strict'

const express = require('express');
const supertest = require('supertest');

function makeTestServer (route) {
    const server = express();
    route(server);
    return supertest(server);
};

/** 
 * Add another function HERE to testServer
 * object used to make test to the server
 * 
 */

 module.exports = {
    makeTestServer
 };