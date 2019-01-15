const mongoose = require("mongoose");
var toDo = mongoose.model("ToDo", {
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
module.exports = { toDo };
