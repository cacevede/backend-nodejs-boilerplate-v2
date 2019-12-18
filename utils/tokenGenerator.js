'use strict'

const jwt = require('jsonwebtoken');
const { config } = require('../configs/config')

module.exports = async function generateToken (userName, userPassword) {
  const payloadTokenData = {
    check: true,
    userName,
    userPassword
  };

  const token = await jwt.sign(
    payloadTokenData,
    config.authJwtSecret,
    {
      expiresIn: config.expireTimeToken
    }
  );
    
  return token;
};