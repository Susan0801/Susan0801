const Joi = require('joi');

const contact_schema = Joi.object({
  name: Joi.string().min(3).max(12).required(),  // Validate name (at least 3 characters)
  email: Joi.string().email().required(), // Validate email
});

module.exports = { contact_schema };
