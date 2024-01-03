const zod = require("zod");

// validation schema for Create Todo
const TodoSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

// validation schema for Mark todo completed
const TodoIDSchema=zod.string();

module.exports = {TodoSchema,TodoIDSchema};
