const express = require("express");

const router = express.Router();

const { checkIfUserExists } = require("./controllers/authControllers");
const {
  validateLogin,
  verifyPassword,
  verifyToken,
  logout,
} = require("./services/auth");

// --- Auth ---
router.post("/api/login", validateLogin, checkIfUserExists, verifyPassword);
router.get("/api/logout", verifyToken, logout);

// ---  Vegetables ---

const vegetableControllers = require("./controllers/vegetableControllers");

router.get("/api/vegetables", vegetableControllers.browse);
router.get("/api/vegetables/:id", vegetableControllers.read);
router.put("/api/vegetables/:id", vegetableControllers.edit);
router.post("/api/vegetables", vegetableControllers.add);
router.delete("/api/vegetables/:id", vegetableControllers.destroy);

module.exports = router;
