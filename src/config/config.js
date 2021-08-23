require('dotenv').config();
const parse = require('pg-connection-string').parse;

let config;
let conn;

if (process.env.DATABASE_URL) {
  config = parse(process.env.DATABASE_URL);
  conn = {
    "username": config.user,
    "password": config.password,
    "database": config.database,
    "host": config.host,
    "dialect": "postgres"
  }
} else {
  conn = {
    "username": process.env.DB_USER,
    "password": process.env.DB_PWD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
}

module.exports = {
  "development": conn
};