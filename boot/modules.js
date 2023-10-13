"use strict";

const cookieParser = require("cookie-parser");
const session = require("express-session");
const multer = require("multer");
const Pliers = require("@shokri/pliers");
const expressLayouts = require("express-ejs-layouts");

module.exports = {
  cookieParser,
  session,
  multer,
  Pliers,
  expressLayouts,
};
