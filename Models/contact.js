const mongoose = require("mongoose");
require("dotenv").config();

//Define the schema
const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    age: Number,
  },
  { collection: "users" }
);

// Create a model from the schema

module.exports.User = mongoose.model("User", userSchema);
