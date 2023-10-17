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
    // Use a different storage. Default: none
    seederStorage: "json",
    // Use a different file name. Default: sequelize-data.json
    seederStoragePath: "./seeders/sequelizeData.json",
    // Use a different table name. Default: SequelizeData
    seederStorageTableName: "sequelize_data",
    pool: {
      min: 0,
      max: 5,
      idle: 10000,
      acquire: 30000,
    },
    logging:false
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: "database_test",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIAL,
    // Use a different storage. Default: none
    seederStorage: "json",
    // Use a different file name. Default: sequelize-data.json
    seederStoragePath: "sequelizeData.json",
    // Use a different table name. Default: SequelizeData
    seederStorageTableName: "sequelize_data",
    pool: {
      min: 0,
      max: 5,
      idle: 10000,
      acquire: 30000,
    },
    logging:false
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: "database_production",
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIAL,
    // Use a different storage. Default: none
    seederStorage: "json",
    // Use a different file name. Default: sequelize-data.json
    seederStoragePath: "sequelizeData.json",
    // Use a different table name. Default: SequelizeData
    seederStorageTableName: "sequelize_data",
    pool: {
      min: 0,
      max: 5,
      idle: 10000,
      acquire: 30000,
    },
    logging:false
  },
};
