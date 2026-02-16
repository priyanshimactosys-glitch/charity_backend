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
      lowercase: true,
      trim: true,
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

    blocks: [blockSchema],

    seo: {
      metaTitle: String,
      metaDescription: String,
      metaKeywords: [String],
    },

    menuId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Menu",
      default: null,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Page", pageSchema);
