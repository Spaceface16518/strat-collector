module.exports.findAll = ({
  mongoPass // Password for mongodb
}: {
  mongoPass: string;
}): any => {
  let uri = `mongodb+srv://Spaceface16518:${mongoPass}@stratbase-rncqk.mongodb.net/test`; // Set database uri
  let uri = `mongodb://Spaceface16518:${mongoPass}@stratbase-shard-00-00-rncqk.mongodb.net:27017,stratbase-shard-00-01-rncqk.mongodb.net:27017,stratbase-shard-00-02-rncqk.mongodb.net:27017/Strats?ssl=true&replicaSet=Stratbase-shard-0&authSource=admin`; // Set database uri
  console.log(uri);
  const mongo = require("mongoose"); // Import mongoose
  mongo.connect(uri); // Connect to mongo database using uri
  let db = mongo.connection; // Sustain connection by assigning it a memory address/variable
  // Report success on successful connection
  db.on("error", err => {
    console.error.bind(console, "connection error"); // "bind" binds the error to this function for reference
  });
  // On open, report successful connection
  db.once("open", () => {
    console.log("connection successful");
  });
  let schema = new mongo.Schema(
    {
      title: String,
      author: { name: String },
      body: String,
      upvotes: Number,
      downvotes: Number,
      gilded: Boolean,
      netUps: Number
    },
    { collection: "Test" } // Specify collection
  );
  var Strat = mongo.model("Strat", schema);

  Strat.find({}, (err, result) => {
    if (!err) {
      console.log(result);
    } else {
      throw err;
    }
  });
};
