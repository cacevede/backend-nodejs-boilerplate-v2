'use strict'

const jwt = require('jsonwebtoken');
const { config } = require('../configs/config')

module.exports = async function generateToken (payloadTokenData) {
  const token = await jwt.sign(
    payloadTokenData,
    config.authJwtSecret,
    {
      expiresIn: config.expireTimeToken
    }
  );
    
  return token;
};