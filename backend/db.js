const mongoose = require("mongoose");

require('dotenv').config()

mongoose.connect(process.env.DATABASE_CONNECTION_STRING)

// Todo Schema
const todoSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Todo };
