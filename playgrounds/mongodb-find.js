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
      .findOneAndDelete({ _id: new ObjectID("5c3b53972ea078e82daa5a2b") })
      .then(res => {
        console.log(JSON.stringify(res, undefined, 2));
      });

    //   .deleteMany({ name: "daniel" })
    //   .then(res => {
    //     console.log(res);
    //   });
    //   .find({ name: "daniel" })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("successfully fetched ToDos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       if (err) {
    //         console.log("unable to fetch ToDos", err);
    //       }
    //     }
    //   );
    // client.close();
    // db.collection("ToDos")
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`ToDo count: ${count}`);
    //     },
    //     err => {
    //       console.log("unable to fetch ToDos", err);
    //     }
    //   );
  }
);
