const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentsSchema = new Schema({
  description: String,
  price: Number,
  type: String,
  category: String
});

module.exports = mongoose.model('Assignments', AssignmentsSchema);