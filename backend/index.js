// imports
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();

// middlewares
app.use(express.json());
app.use("/user", userRoutes);

app.listen(3000);
