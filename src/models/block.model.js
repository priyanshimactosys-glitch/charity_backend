const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema({
  blockType: {
    type: String,
    required: true,
    enum: [
      "hero",
      "text",
      "image_text",
      "cta",
      "faq",
      "cards",
      "map",
      "donation"
    ],
  },

  content: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },

  order: {
    type: Number,
    default: 0,
  },

  isEnabled: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Block", blockSchema);
