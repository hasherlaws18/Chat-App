const express = require("express");
//const mongoose = require('mongoose')
//const dotenv = require('dotenv')
//dotenv.config()
//mongoose.connect()
//const jwt = require('jsonwebtoken')
//const cors = require('cors')
//jwtSecret =
const UserModel = require("./models/User");

const app = express();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: null,
  })
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const createdUser = await User.create({ username, password });
  jwt.sign({ userId: createdUser._id }, jwtSecret, {}, (err, token) => {
    if (err) throw err;
    res.cookie("token", token).status(201).json({
      id: createdUser._id,
    });
  });
});

app.listen(3001);
