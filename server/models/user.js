const mongoose = require("mongoose");
var User = mongoose.model("users", {
  email: {
    required: true,
    trim: true,
    minlength: 1,
    type: String
  }
});

module.exports = { User };
