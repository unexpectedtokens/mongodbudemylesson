const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
const _ = require("lodash");

var { mongoose } = require("./db/mongoose");
var { toDo } = require("./models/todo");
var { user } = require("./models/user");
const port = process.env.PORT || 9999;

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
app.get("/", (req, res) => {
  res.send("add /todos after your url");
});
app.get("/todos", (req, res) => {
  toDo.find().then(
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
  } else {
    toDo
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
  }
});
app.delete("/todos/:id", (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send("Invalid ID");
  }
  toDo
    .findByIdAndRemove(id)
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
app.post("/newUser", (req, res) => {
  let body = _.pick(req.body, ["email", "password"]);
  let User = new user(body);
  User.save()
    .then(user => {
      res.send(user);
    })
    .catch(e => {
      res.status(400).res.send(e);
    });
});

app.patch("/todos/:id", (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ["text", "completed"]);
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  toDo
    .findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        return res.status(404).send(e);
      }
      res.send({ todo });
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log(`Connected to http://localhost:${port}`);
});

module.exports = { app };
