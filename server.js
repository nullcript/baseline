"use strict";

require("module-alias/register");
require("dotenv").config();
const { hostname, port } = require("./globalConfig");

require("./app")(port, hostname); // Express Server
