var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  mobile: { type: Number, required: true },
  email: { type: String, required: false },
  password: { type: String, required: true },
  cart: { type: Array, required: false },
});
var User = mongoose.model("user", userSchema);
module.exports = User;
