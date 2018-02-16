module.exports.findAll = ({
  mongoPass, // Password for mongodb
  model // The model used for queries, usually imported from another module
}: {
  mongoPass: string;
  model: any;
}): any => {
  let uri = `mongodb+srv://Spaceface16518:${mongoPass}@stratbase-rncqk.mongodb.net/test`; // Set database uri
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
    { collection: "Test" }
  );
  var Test = mongo.model("Test", schema, "Test");
var doc = new Test({
  title: "Test no 3",
  author: {name: "Alien"},
  body: "This is the third test, made (hopefully) by the application",
  upvotes: 5,
  downvotes: 0,
  gilded: false,
  netUps: 5
})
doc.save()
  Test.find({}, (err, result) => {
    if (!err) {
      console.log(result);
    } else {
      throw err;
    }
  });
};

module.exports.model = () => {
  // Set schema
  let schema = new require("mongoose").Schema({
    title: String,
    author: { name: String },
    body: String,
    upvotes: Number,
    downvotes: Number,
    gilded: Boolean,
    netUps: Number
  });
  // Work in progress
  /*schema.methods.getNetUps = (): void => {
    return this.model('table').find({}, 'upvotes downvotes', (err, table) => {
      if(err) {console.error.bind(console, 'error getting net upvotes')}
      this.model('table').find({}).
    })
  }*/
  // Set model
  let model = require("mongoose").model("Test", schema);
  return schema;
};
