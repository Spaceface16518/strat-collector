module.exports = function() {
  let mongoose = require("mongoose"); // Import mongoose
  let Schema = mongoose.Schema; // Set alias
  let Model = mongoose.model.bind(mongoose); // Set alias; .bind(mongoose) is precaution for exporting
  let format = {
    id: String,
    title: String,
    author: { name: String },
    body: String,
    tags: Array,
    upvotes: Number,
    downvotes: Number,
    gilded: Boolean,
    netUps: Number
  };
  let schema = new Schema(format, { collection: "strats" }); // Specify collectioj

  return Model("Strat", schema);
};
