const mongoose = require('mongoose');

const test2Schema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email: String,
  isActive: Boolean
});

module.exports = mongoose.model('Test2', test2Schema, 'test2');