const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    subtitle: { type: String },

    category: {
      type: String,
      enum: ["identity", "admin_support", "rentals", "programs"],
      required: true,
    },

    status: {
      type: String,
      enum: ["active", "coming_soon", "hidden"],
      default: "active",
    },

    bookingType: {
      type: String,
      enum: [
        "appointment_required",
        "walk_in",
        "request_form",
        "external_link",
      ],
      required: true,
    },

    externalBookingUrl: { type: String },

    durationMinutes: { type: Number, default: 0 },

    bufferMinutes: { type: Number, default: 0 },

    locations: {type: String,
      enum: [
        "CEO office",
        "Secure Services Room",
        "Conference Room",
      ],},

    availableHours: {
      monday: { start: String, end: String },
      tuesday: { start: String, end: String },
      wednesday: { start: String, end: String },
      thursday: { start: String, end: String },
      friday: { start: String, end: String },
      saturday: { start: String, end: String },
      sunday: { start: String, end: String },
    },

    checklist: [
      {
        title: { type: String, required: true },
        details: { type: String },
        isRequired: { type: Boolean, default: true },
      },
    ],

    fees: [
      {
        title: String,
        amount: Number,
        description: String,
      },
    ],

    confirmationMessage: { type: String },

    downloads: [
      {
        name: String,
        url: String,
      },
    ],

    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);