const mongoose = require("mongoose");

const blockSchema = new mongoose.Schema(
  {
    type: {
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
        "donation",
        "services",
      ],
    },

    content: {
      type: Object,
      required: true,
    },

    order: Number,

    isEnabled: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Block", blockSchema);
