const User = require("../models/user.model");
const bcrypt = require("bcryptjs");


// Create User
exports.createUser = async (data) => {

  // Check duplicate email
  const existing = await User.findOne({ email: data.email });
  if (existing) {
    throw new Error("Email already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  data.password = hashedPassword;

  return await User.create(data);
};


// Get All Users
exports.getAllUsers = async () => {
  return await User.find().populate("role", "name");
};


// Get Single User
exports.getUserById = async (id) => {
  return await User.findById(id).populate("role", "name");
};


// Update User
exports.updateUser = async (id, data) => {

  if (data.password) {
    data.password = await bcrypt.hash(data.password, 10);
  }

  return await User.findByIdAndUpdate(id, data, { new: true });
};


// Delete User
exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};


// Toggle Active Status
exports.toggleUserStatus = async (id) => {

  const user = await User.findById(id);

  if (!user) throw new Error("User not found");

  user.isActive = !user.isActive;

  return await user.save();
};
