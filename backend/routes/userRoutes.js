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

// GET: Display All incomplete Todos
router.get("/todos", async (req, res) => {
  let incompleteTodos = await Todo.find({ completed: false }).exec();
  // incompleteTodos = incompleteTodos.map((item) => {
  //   const id = item.id;
  //   const title = item.title;
  //   const description = item.description;
  //   return {
  //     id,
  //     title,
  //     description,
  //   };
  // });
  
  if (incompleteTodos.length == 0) {
    res.status(200).json({
      msg: "You have completed all your todos for today",
    });
  } else {
    res.status(200).json({
      "Incomplete Todos": incompleteTodos,
    });
  }
});

// PUT: Mark Todo as "completed"
router.put("/todos/:id", async (req, res) => {
  const todoID = req.params.id;
  const isTodoIDFormatValid = TodoIDSchema.safeParse(todoID).success;

  if (isTodoIDFormatValid == false) {
    res.status(411).json({
      msg: "Input format incorrect",
    });
  }
  // find todo in the database and update it
  const isTodoExist = await Todo.findOne({ id: todoID }).exec();
  if (!isTodoExist) {
    res.status(404).json({ msg: "Todo not found" });
  } else {
    await Todo.findOneAndUpdate({ id: todoID }, { completed: true });

    res.status(200).json({
      msg: "Todo updated",
    });
  }
});

module.exports = router;
