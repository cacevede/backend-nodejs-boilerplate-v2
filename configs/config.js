'use strict'

require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    corsProduction: process.env.CORS_DOMAIN_PRODUCTION,
    corsDevelopment: process.env.CORS_DOMAIN_DEV,
    dbUsername: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbDialect: process.env.DB_DIALECT,
    authJwtSecret: process.env.AUTH_JWT_SECRET,
    expireTimeToken: process.env.EXPIRE_JWT_TOKEN_TIME,
    saltCrypt: process.env.SALT_ROUNDS,
    apiVersion: process.env.API_VERSION,
    fiveMinutesInSeconds: process.env.FIVE_MINUTES_IN_SECONDS,
    sixtyMinutesInSeconds: process.env.SIXTY_MINUTES_IN_SECONDS
};

module.exports = { config };