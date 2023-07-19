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
const { validateVegetable } = require("./services/vegetableValidator");

router.get("/api/vegetables", vegetableControllers.browse);
router.get("/api/vegetables/:id", vegetableControllers.read);
router.put("/api/vegetables/:id", validateVegetable, vegetableControllers.edit);
router.post("/api/vegetables", validateVegetable, vegetableControllers.add);
router.delete("/api/vegetables/:id", vegetableControllers.destroy);

module.exports = router;
