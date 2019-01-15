const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentsSchema = new Schema({
  description: String,
  pris: Number,
  type: String,
  category: String
});

module.exports = mongoose.model('Assignments', AssignmentsSchema);