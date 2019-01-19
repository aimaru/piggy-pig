const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  description: String,
  price: Number,
  type: String,
  category: String
});

module.exports = mongoose.model('Assignment', AssignmentSchema);