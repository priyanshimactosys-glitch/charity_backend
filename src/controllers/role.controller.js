const roleService = require("../services/role.service");

// Create Role
exports.createRole = async (req, res) => {
  try {
    const role = await roleService.createRole(req.body);
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Roles
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await roleService.getAllRoles();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Role By ID
exports.getRoleById = async (req, res) => {
  try {
    const role = await roleService.getRoleById(req.params.id);

    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    res.json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Role
exports.updateRole = async (req, res) => {
  try {
    const role = await roleService.updateRole(req.params.id, req.body);

    if (!role) {
      return res.status(404).json({ message: "Role not found" });
    }

    res.json(role);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Role
exports.deleteRole = async (req, res) => {
  try {
    await roleService.deleteRole(req.params.id);
    res.json({ message: "Role deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
