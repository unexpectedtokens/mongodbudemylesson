const mongoose = require("mongoose");
var todo = mongoose.model("Todo", {
  text: {
    required: true,
    trim: true,
    minlength: 1,
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});
module.exports = { todo };
