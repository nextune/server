"use strict";

var Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.db_name, process.env.db_user, process.env.db_pwd, {
  host: process.env.db_host,
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});