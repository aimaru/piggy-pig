const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  description: String,
  pris: Number,
  category: String
});

module.exports = mongoose.model('Assignments', AssignmentsSchema);