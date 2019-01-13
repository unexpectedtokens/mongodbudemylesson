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
    const db = client.db("ToDoApp");
    db.collection("users")
      .findOneAndUpdate(
        { _id: new ObjectID("5c3b538a2ea078e82daa5a25") },
        {
          $set: {
            age: 23
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(res => {
        console.log(JSON.stringify((res, undefined, 2)));
      });
  }
);
