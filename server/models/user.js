const mongoose = require("mongoose");
const vd = require("validator");
var user = mongoose.model("users", {
  email: {
    required: true,
    trim: true,
    minlength: 1,
    type: String,
    unique: true,
    validate: {
      validator: value => {
        return vd.isEmail(value);
      },
      message: `{Value} is not a valid email`
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [
    {
      access: {
        required: true,
        type: String
      },
      token: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = { user };
