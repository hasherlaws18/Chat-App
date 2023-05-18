const express = require("express");
//const mongoose = require('mongoose')
//const cookieParser = require('cookie-parser')
//const dotenv = require('dotenv')
//dotenv.config()
//mongoose.connect()
//const jwt = require('jsonwebtoken')
const cors = require("cors");
//const bcrypt = require('bcryptjs')
const User = require("./models/User");
//const ws = require('ws')
//const jwtSecret =
const bcryptSalt = bcrypt.generateSaltSync(10);
const UserModel = require("./models/User");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "`",
  })
);

app.get("/profile", (req, res) => {
  const token = req.cookies?.token;
  if (token) {
    jwt.verify(token, jwtSecret, {}, (err, userData) => {
      if (err) throw err;
      res.json(userData);
    });
  } else {
    res.status(401).json("no token");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findOne({ username });
  if (foundUser) {
    const passOk = bcrypt.compareSync(password, foundUser.password);
    if (passOk) {
      jwt.sign(
        { userId: foundUser._id, username },
        jwtSecret,
        {},
        (err, token) => {}
      );
      res.cookies("token", token, { sameSite: "none", secure: true }).json({
        id: foundUser._id,
      });
    }
  }
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
  const createdUser = await User.create({
    username: username,
    password: hashedPassword,
  });
  jwt.sign(
    { userId: createdUser._id, username },
    jwtSecret,
    {},
    (err, token) => {
      if (err) throw err;
      res
        .cookie("token", token, { sameSite: "none", secure: true })
        .status(201)
        .json({
          id: createdUser._id,
        });
    }
  );
});

const server = app.listen(3001);

const wss = new ws.WebSocketServer({ server });
wss.on("connection", (connection) => {});
