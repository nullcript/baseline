"use strict";

const { rootDir } = require("../globalConfig");
const path = require("node:path");

module.exports = (app) => {
  app.set("view engine", "ejs");
  app.set("views", path.join(rootDir, "views"));
  app.set("layout", "layouts/layout");
};
