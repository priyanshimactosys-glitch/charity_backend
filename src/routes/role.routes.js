const express = require("express");
const router = express.Router();

const roleController = require("../controllers/role.controller");

// Create Role
router.post("/", roleController.createRole);

// Get All Roles
router.get("/", roleController.getAllRoles);

// Get Role By ID
router.get("/:id", roleController.getRoleById);

// Update Role
router.put("/:id", roleController.updateRole);

// Delete Role
router.delete("/:id", roleController.deleteRole);

module.exports = router;
