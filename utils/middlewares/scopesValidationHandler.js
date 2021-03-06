'use strict'

const boom = require('@hapi/boom');

module.exports = function scopesValidation (allowedScopes) {
    return (req, res, next) => {
        if (!req.user || (req.user && !req.user.scopes)) {
            next(boom.unauthorized('Missing scopes'));
        }

        const hasAccess = allowedScopes
            .map(allowedScope => req.user.scopes.includes(allowedScope))
            .find(allowed => Boolean(allowed));
        
        hasAccess ? next() : next(boom.unauthorized('Insufficient scopes'));
    };
};