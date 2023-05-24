//const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    password: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;

//need to add this on mongodb so users can be stored in the database
