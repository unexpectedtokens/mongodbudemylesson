// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/ToDoApp",
  {
    useNewUrlParser: true
  },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB server");

    client.close();
  }
);
