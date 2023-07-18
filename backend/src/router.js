const express = require("express");

const router = express.Router();

const { checkIfUserExists } = require("./controllers/authControllers");
const { validateLogin, verifyPassword } = require("./services/auth");

router.post("/api/login", validateLogin, checkIfUserExists, verifyPassword);

module.exports = router;
