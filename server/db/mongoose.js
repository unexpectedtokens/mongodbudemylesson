const mongoose = require("mongoose");
const db =
  "mongodb://danieldejong:A3WqSpvBTeVBkUf@ds111425.mlab.com:11425/todosdb" ||
  "mongodb://localhost:27017/ToDoApp";
mongoose.Promise = global.Promise;
mongoose.connect(db);

module.exports = { mongoose };
