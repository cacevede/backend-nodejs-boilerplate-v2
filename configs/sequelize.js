'use strict'

const { config } = require('./config');

const Sequelize = require('sequelize');

//Here, require all your Models definitions in order to be created:
const UserModel = require('../components/users/model');

const configDB = {
  database: config.dbName,
  username: config.dbUsername,
  password: config.dbPassword,
  host: config.dbHost,
  dialect: config.dbDialect
}

const sequelize = new Sequelize(configDB);

// Here, list all your Models to be created:
const User = UserModel(sequelize, Sequelize);

sequelize.authenticate()
  .then(() => {
    console.log('Connection established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
  });

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  });

module.exports = {
  // Here, export all your Models:
  User
}