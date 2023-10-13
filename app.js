"use strict";

const express = require("express");
const app = express();

//|---| CONFIGURATIONS::(app.set(config)) |---|
require("./boot/configurations")(app);

//|---| MIDDLEWARES::(app.use(middleware)) |---|
require("./boot/middlewares")(app, express);

//|---| ROUTES::(app.use(route)) |---|
require("./routes")(app);

module.exports = (port, hostname) => {
  app.listen(port, hostname, () => {
    console.log(`Express server is running on ${hostname}:${port}`);
  });
};
