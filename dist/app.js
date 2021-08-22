"use strict";

var express = require('express');

var morgan = require('morgan');

var cors = require('cors');

var app = express(); //db test

var db = require("./database");

db.authenticate().then(function () {
  return console.log('YAY');
})["catch"](function (err) {
  return console.log('Error ' + err);
}); //routers

var trackRoutes = require("./routes/tracks"); //logging


app.use(morgan('dev')); //parsing

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json()); //CORS policy and OPTIONS handling

app.use(cors()); //routing

app.use('/tracks', trackRoutes); //routing error thrower

app.use(function (req, res, next) {
  var error = new Error('Endpoint not available!');
  error.status = 404;
  next(error);
}); //catch all error handler

app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
module.exports = app;