const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
 
mongoose.connect("mongodb://localhost:27017/").then(() => {
  console.log("Connected to Data Base");
});
 
const User = require("./model/user");
const app = express();
 
const port = 3000;
 
app.use(express.json());
app.use(cors());
 
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body.formData;
  const isUserAvailable = await User.findOne({ email });
  if (isUserAvailable) {
    return res.status(400).json({ msg: "Email Already Present" });
  }
    const id = User.length + 1;
    const result = await User.create({
        id: id,
        name:name,
        email: email,
        password: password
   
  });
  return res.status(200).json({ msg: "User Created" });
});
 
app.listen(port);