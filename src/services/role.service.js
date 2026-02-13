const Role = require("../models/role.model");

// Create Role
exports.createRole = async (data) => {
  const role = await Role.create(data);
  return role;
};

// Get All Roles
exports.getAllRoles = async () => {
  return await Role.find();
};

// Get Role By ID
exports.getRoleById = async (id) => {
  return await Role.findById(id);
};

// Update Role
exports.updateRole = async (id, data) => {
  return await Role.findByIdAndUpdate(id, data, { new: true });
};

// Delete Role
exports.deleteRole = async (id) => {
  return await Role.findByIdAndDelete(id);
};
