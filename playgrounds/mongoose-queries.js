const { objectId } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { todo } = require("./../server/models/todo");
const { user } = require("./../server/models/user");

// var id = "5c47818c4e0469bd26380b46";

// todo
//   .find({
//     _id: id
//   })
//   .then(todos => {
//     console.log(todos);
//   });
var id = "5c3d048edbeff615c4d661141234";

user
  .findById(id)
  .then(user => {
    if (!user) {
      return console.log("id not found");
    }
    console.log("User: ", user);
  })
  .catch(e => {
    console.log(e);
  });
