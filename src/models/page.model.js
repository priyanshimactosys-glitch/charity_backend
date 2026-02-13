const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    template: {
      type: String,
      enum: ["standard", "booking", "donate"],
      default: "standard",
    },

    visibility: {
      type: String,
      enum: ["listed", "unlisted", "draft", "private"],
      default: "draft",
    },

    blocks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Block",
      },
    ],

    metaTitle: String,
    metaDescription: String,

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Page", pageSchema);
