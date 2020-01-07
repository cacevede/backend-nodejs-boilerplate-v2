'use strict'

const { config } = require('./config');

//NoSQL Database connection throught Mongoose ODM
const mongoose = require('mongoose');

module.exports = async function () {
    // Connect to our Database and handle any bad connections
    const mongooseUriConnection = `mongodb://${config.dbUsername}:${config.dbPassword}@${config.dbHost}:${config.port}/${config.dbName}`;
    
    await mongoose.connect(mongooseUriConnection, {
        useNewUrlParser: true
    });

    // mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
    mongoose.connection.on('error', err => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
    })
};