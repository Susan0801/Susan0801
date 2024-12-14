// models/Contact.js
const mongoose = require('mongoose');

// Define the contact schema
const contact_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), // Email regex
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save hook to update `updatedAt`
contact_Schema.pre('save', function (next) {
    this.createdAt = Date.now();
    next();
});

// Create and export the Contact model
const Contact = mongoose.model('Contact', contact_Schema);

module.exports = Contact;
