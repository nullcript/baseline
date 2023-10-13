"use strict";

require("dotenv").config();
const { hostname, port } = require("./globalConfig");

require("./app")(port, hostname); // Express Server
