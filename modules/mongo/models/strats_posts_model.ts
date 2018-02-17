module.exports = function() {
  let mongoose = require("mongoose");
  let Schema = mongoose.Schema;
  let Model = mongoose.model;
  let schema = new Schema(format, { collection: "" });

  return Model("Strat", schema);
};
