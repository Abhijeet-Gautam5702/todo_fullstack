const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://abhi5702:mongodb5702@cluster0.qvkxsat.mongodb.net/todo_fullstack"
);

// Todo Schema
const todoSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Todo };
