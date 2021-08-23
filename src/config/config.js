let conn;

if (process.env.DATABASE_URL) {
  conn = {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": true,
      "rejectUnauthorized": false
    }
  }
} else {
  require('dotenv').config(); //do this here as its only a dev dependency

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