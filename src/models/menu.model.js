const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    page: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Page",
    },

    parentMenu: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
      default: null,
    },

    order: Number,

    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Menu", menuSchema);
