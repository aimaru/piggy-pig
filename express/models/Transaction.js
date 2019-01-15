const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Transaction = new Schema({
  income: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      assignment: {
        type: Schema.Types.ObjectId,
        ref: "Assignment"
      }
    }
  ],
  expenditur: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      assignment: {
        type: Schema.Types.ObjectId,
        ref: "Assignment"
      }
    }
  ]
});

module.exports = mongoose.model("Transaction", Transaction);
