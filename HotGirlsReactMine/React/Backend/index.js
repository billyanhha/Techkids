const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");

try {
  require("./config-local.json");
} catch (err) {
  throw new Error(
    "File config-local.json not created. Check out config-template.json"
  );
}
const config = require("./config-local.json");

const app = express();

const imageRouter = require("./modules/api/images/router");
const userRouter = require("./modules/api/users/router");
const authRouter = require("./modules/api/auth/router");

// server -> session: {
//   sessionId: 12387123,
//   username: AVAVT,
//   id: 123b12321c
// }

// client -> cookie: {
//   sessionId: 12387123
// }
app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOWALL");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );

  if (req.headers.origin) {
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  }

  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: config.secureCookie,
      maxAge: 12 * 60 * 60 * 1000
    }
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));

app.use("/api/auth", authRouter);
app.use("/api/images", imageRouter);
app.use("/api/users", userRouter);


app.use(express.static('./public'));

app.get('/' , (res , req) =>{
    res.sendfile('./public/index.html');
})

mongoose.connect(config.mongoPath, err => {
  if (err) console.error(err);
  else console.log("Database connect successful");
});

const port = process.env.port || 6969;

app.listen(port, err => {
  if (err) console.log(err);
  console.log("Server started at port " + port);
});
