const express = require("express");
const app = express();
const bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose");
var { toDo } = require("./models/todo");
var { User } = require("./models/user");
app.use(bodyParser.json());
app.post("/todos", (req, res) => {
  var todo = new toDo({
    text: req.body.text
  });
  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.listen(3000, () => {
  console.log("Connected to localhost:8000");
});
