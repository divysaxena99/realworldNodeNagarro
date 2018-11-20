const jwt = require('express-jwt');
const { env } = require('../../../properties')
function getTokenFromHeader(req)
    {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
            req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
        }
        return null;
    }
    Auth = {
        required: jwt({
          secret: env.jwtTokenKey,
          userProperty: 'payload',
          getToken: getTokenFromHeader
        }),
        optional: jwt({
          secret: env.jwtTokenKey,
          userProperty: 'payload',
          credentialsRequired: false,
          getToken: getTokenFromHeader
        })
      }
module.exports = Auth;