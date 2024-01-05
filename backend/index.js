// imports
const express = require("express");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(cors()); // This ensures that every frontend url can access this backend hosted on "localhost:3000"

app.use("/user", userRoutes);

app.listen(3000);
