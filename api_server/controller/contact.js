const Contact = require('../models/Contact'); // Import the Contact model
const Counter = require('../models/Counter'); // Import the Counter model

// POST route to handle form submission
exports.submit = async (req, res) => {
  const { name, email } = req.body;

  try {
    // Check if the email is already in the Contact collection
    const existingEmail = await Contact.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email is already registered. Please use a different email.' });
    }

    // Create a new contact document
    const newContact = new Contact({ name, email });

    // Save the contact document to the database
    await newContact.save();

    // Increment the global submission count by 1 (if using a Counter model)
    const updatedCount = await Counter.updateOne(
      {},
      { $inc: { count: 1 } }, // Increment the "count" field by 1
      { upsert: true } // If no document exists, create it
    );

    // Respond with a success message
    res.status(201).json({
      message: 'Contact submitted successfully',
      updatedCount: updatedCount.modifiedCount, // Optional: indicate how many documents were updated
    });

  } catch (error) {
    console.error('Error in form submission:', error); // Log error for server-side debugging
    res.status(500).json({
      message: 'Error submitting',
      error: error.message, // Send a detailed error message
    });
  }
};
