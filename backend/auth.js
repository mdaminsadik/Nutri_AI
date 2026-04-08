const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bycrypt = require("bcrypt");
const authRouter = require("./routes/auth");

mongoose.connect("mongodb://localhost:27017/").then(() => {
  console.log("Connected to Data Base");
});

const User = require("./model/user");
const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/api",authRouter)

app.listen(port);