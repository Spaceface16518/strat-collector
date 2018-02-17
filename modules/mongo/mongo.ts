module.exports.findAll = ({ mongoPass }: { mongoPass: string }): any => {
  let uri = `mongodb://Spaceface16518:${mongoPass}@stratbase-shard-00-00-rncqk.mongodb.net:27017,stratbase-shard-00-01-rncqk.mongodb.net:27017,stratbase-shard-00-02-rncqk.mongodb.net:27017/Strats?ssl=true&replicaSet=Stratbase-shard-0&authSource=admin`; // Set database uri
  console.log(uri);
  const mongoose = require("mongoose"); // Import mongoose
  const model = require("./models/strats_posts_model.js");
  mongoose.connect(uri); // Connect to mongo database using uri
  let db = mongoose.connection; // Sustain connection by assigning it a memory address/variable
  // Report success on successful connection
  db.on("error", err => {
    console.error.bind(console, "connection error"); // "bind" binds the error to this function for reference
  });
  // On open, report successful connection
  db.once("open", () => {
    console.log("connection successful");
  });
  let stratModel = new model();
  stratModel.find({}, result => {
    console.log(result);
  });
};
