const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let { ObjectID } = require("mongodb");

var { mongoose } = require("./db/mongoose");
var { todo } = require("./models/todo");
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
app.get("/todos", (req, res) => {
  todo.find().then(
    todos => {
      res.send(todos);
    },
    e => {
      res.status(400).send(e);
    }
  );
});
app.get("/todos/:id", (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send("Invalid ID");
  }
  todo
    .findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send("Id not found");
      }
      res.send(todo);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.listen(3001, () => {
  console.log("Connected to http://localhost:3001");
});

module.exports = { app };
