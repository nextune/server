"use strict";

var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  try {
    var token = req.headers.authentication;
    var decode = jwt.verify(token, process.env.jwt_key);
    req.userData = decode;
    next();
  } catch (err) {
    return res.status(401).json({
      error: 'Authorisation Failed :('
    });
  }
};