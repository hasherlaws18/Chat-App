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
const Message = require("./models/Message");
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

async function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    const token = req.cookies?.token;
    if (token) {
      jwt.verify(token, jwtSecret, {}, (err, userData) => {
        if (err) throw err;
        resolve(userData);
      });
    } else {
      reject("no token");
    }
  });
}

app.get("/messages/:userId", async (req, res) => {
  const { userId } = req.params;
  const userData = await getUserDataFromReq(req);
  const ourUserId = userData.userId;
  const messages = await Message.find({
    sender: { $in: [userId, ourUserId] },
    recipient: { $in: [userId, ourUserId] },
  }).sort({ createdAt: -1 });
  res.json(messages);
});

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
wss.on("connection", (connection, req) => {
  const cookies = req.headers.cookie;
  if (cookies) {
    const tokenCookieString = cookies
      .split(";")
      .find((str) => str.startsWith("token"));
    if (tokenCookieString) {
      const token = tokenCookieString.split("=")[1];
      if (token) {
        jwt.verify(token, jwtSecret, {}, (err, userData) => {
          if (err) throw err;
          const { userId, username } = userData;
          connection.userId = userId;
          connection.username = username;
        });
      }
    }
  }
});

//really struggled with this part and trying to get messages to work properly
//need to fit in async somehow because I have await
const messageData = JSON.parse(message.toString());
const { recipient, text } = messageData;
if (recipient && text) {
  const messageDoc = await Message.create({
    sender: userId,
    recipient,
    text,
  });
  [...wss.clients]
    .filter((c) => c.userId === recipient)
    .forEach((c) =>
      c.send(
        JSON.stringify({ text, sender: userId, recipient, id: messageDoc._id })
      )
    );
}
