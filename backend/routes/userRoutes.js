const express = require("express");
const router = express.Router();
const { TodoSchema, TodoIDSchema } = require("../types");
const { Todo } = require("../db");

// POST: Create Todo
router.post("/todos", async (req, res) => {
  const todoTitle = req.body.title;
  const todoDesc = req.body.description;
  const isTodoFormatValid = TodoSchema.safeParse({
    title: todoTitle,
    description: todoDesc,
  }).success;

  if (isTodoFormatValid == false) {
    res.status(411).json({
      msg: "Input format incorrect",
    });
  } else {
    const todo = new Todo({
      id: Math.random(),
      title: todoTitle,
      description: todoDesc,
      completed: false,
    });
    await todo.save();
    res.status(200).json({
      msg: "Todo created Successfully",
    });
  }
});

// GET: Display Todos
router.get("/todos", async (req, res) => {});

// PUT: Mark Todo as "completed"
router.put("/todos/:id", async (req, res) => {
  const todoID = req.headers.id;
  const isTodoIDFormatValid = TodoIDSchema.safeParse(todoID);

  if (isTodoIDFormatValid == false) {
    res.status(411).json({
      msg: "Input format incorrect",
    });
  }
  // find todo in the database
  const isTodoExist = await Todo.findOne({ id: todoID }).exec();
  if (!isTodoExist) {
    res.status(404).json({ msg: "Todo not found" });
  }

  res.status(200).json({
    msg: "Todo updated",
  });
});

module.exports = router;
