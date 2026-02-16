const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const { verifyToken } = require("../middlewares/auth.middleware");
const { checkRole } = require("../middlewares/role.middleware");

// Create User
router.post("/", userController.createUser);

// Get All Users
router.get(
  "/",
  verifyToken,
  checkRole("system_admin", "sub_admin"),
  userController.getAllUsers
);

// Get Single User
router.get("/:id", userController.getUserById);

// Update User
router.put("/:id", userController.updateUser);

// Delete User
router.delete("/:id", userController.deleteUser);

// Toggle Active Status
router.patch("/:id/status", userController.toggleStatus);

module.exports = router;
