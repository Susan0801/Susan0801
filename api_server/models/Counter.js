// models/Counter.js
const mongoose = require('mongoose');

// Define schema for the counter
const counterSchema = new mongoose.Schema({
    count: { type: Number, default: 0 },
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;
