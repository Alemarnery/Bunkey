"use strict";
const express = require("express");

const { setApiRoutes } = require("./util");
const { HttpError } = require("../helpers/HttpError");

const router = express.Router();

setApiRoutes(router);

/**
 * /api Root Route.
 */
router.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Welcome to Alemarnery's App",
  });
});

/**
 * If No route matches. Send user a 404 page
 */
router.use("*", (req, res, next) => {
  // 404 handler
  const error = new Error("Resource not found");

  error.statusCode = 404;
  next(error);
});

router.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.error(req.method, req.url, err.statusCode, err.message);
  }
  const error = new HttpError(err);

  res.status(error.statusCode);
  res.json(error);
  next();
});

module.exports = router;
