"use strict";

class rootController {
  index(req, res) {
    res.render("index", {
      pageTitle: "express-baseline",
    });
  }
}

module.exports = new rootController();
