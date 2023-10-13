"use strict";

require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: "database_development",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIAL,
    pool: {
      min: 0,
      max: 5,
      idle: 10000,
      acquire: 30000,
    },
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: "database_test",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIAL,
    pool: {
      min: 0,
      max: 5,
      idle: 10000,
      acquire: 30000,
    },
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: "database_production",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIAL,
    pool: {
      min: 0,
      max: 5,
      idle: 10000,
      acquire: 30000,
    },
  },
};
