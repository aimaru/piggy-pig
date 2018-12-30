const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IncomeAndOutgo = new Schema ({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  income: {
    category: String,
    TimeStamp: {
      type: Date,
      default: Date.now
    },
    price: Number
  },
  outgo: {
    category: String,
    TimeStamp: {
      type: Date,
      default: Date.now
    },
    price: Number
  },
  balance: Number

}); 

module.exports = mongoose.model('IncomeAndOutgo', IncomeAndOutgo);