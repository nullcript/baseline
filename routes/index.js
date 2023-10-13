"use strict";

const rootRouter = require("./rootRouter");

module.exports = (app) => {
  app.use(rootRouter);
};
