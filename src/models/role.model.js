const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ["system_admin", "sub_admin", "volunteer"],
      unique: true,
    },

    permissions: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Role", roleSchema);
