const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  role: String,
  belongs: [
    {
      users: {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    }
  ],
  image: {
    type: String,
    default: "/uploads/profile_img/default.svg"
  },
  hasGoal: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("User", UserSchema);
