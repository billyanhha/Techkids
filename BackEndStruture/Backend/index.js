const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require('express-session');
const app = express();
const config = require('./config-local.json');
const imageRouter = require("./modules/api/images/router");
const userRouter = require("./modules/api/users/router");
const authRouter = require("./modules/api/auth/router");
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure : config.secureCokkie,
    maxAge: 12 * 60 * 60 * 1000 }
}))


app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/images", imageRouter);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.get("/", (req, res) => {
  res.send("OK");
});



mongoose.connect(config.mongoPath, err => {
  if (err) console.error(err);
  else console.log("Database connect successful");
});

const port = process.env.port || 6969;

app.listen(port, err => {
  if (err) console.log(err);
  console.log("Server started at port " + port);
});
