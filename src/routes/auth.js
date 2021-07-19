"use strict";
const express = require("express");

const AuthController = require("../controllers/AuthController");

const router = express.Router();

router.post("/login", AuthController.login);
router.get("/logout", AuthController.checkLogin, AuthController.logout);
router.post("/register", AuthController.register);
router.post(
  "/changePassword",
  AuthController.checkLogin,
  AuthController.changePassword
);

module.exports = router;
