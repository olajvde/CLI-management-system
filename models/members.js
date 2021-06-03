const mongoose = require("mongoose");

//member schema

const memberSchema = mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  phone: {type: String},
  email: {type: String},
});

module.exports = mongoose.model("Member", memberSchema);
