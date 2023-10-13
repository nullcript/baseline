"use strict";

const express = require("express");
const rootRouter = express.Router();

const { rootController } = require("../controllers");

rootRouter.get("/", rootController.index);

module.exports = rootRouter;
