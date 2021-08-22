"use strict";

var http = require('http');

var app = require("./app");

var port = process.env.PORT || process.env.fallback_port;
var server = http.createServer(app);
server.listen(port);
console.log("Server listening on port", port);