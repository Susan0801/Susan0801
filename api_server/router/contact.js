const express = require('express');
const router = express.Router();
const contact_controller = require('../controller/contact'); // Import the Contact controller
//const validator = require('express-joi-validation').createValidator(); // Express Joi validation

// Import the validation schema
//const { contact_schema } = require('../schema/contact');

// POST route to handle form submission
router.post('/submission', contact_controller.submit);

module.exports = router;
