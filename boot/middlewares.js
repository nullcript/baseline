"use strict";

const { rootDir } = require("../globalConfig");
const path = require("node:path");
const { cookieParser, session, expressLayouts } = require("./modules");

module.exports = (app, express) => {
  app.use(expressLayouts);
  app.use(express.static(path.join(rootDir, "public")));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(
    session({
      secret: "49dfs?8f76d!5sf79ds8",
      cookie: { maxAge: 86400000 },
      resave: false,
      saveUninitialized: true,
    })
  );
};
