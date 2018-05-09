const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const gamesRouter = require('./models/api/games/router');
const app = express();
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json({extended : false}));
app.use((req, res, next) => {
    res.setHeader("X-Frame-Options", "ALLOWALL");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  

app.use('/api/games' , gamesRouter);
app.use(express.static('./public'));

app.get('/' , (res , req) =>{
    res.sendFile('./public/index.html')
})

mongoose.connect('mongodb://localhost:27017/game', (err)=>{
    if(err) console.log(err);
    console.log("Database connect success!");
});

const port = process.env.port || 6969;

app.listen(port , (err)=>{
    if(err) console.log(err);
    console.log("connect success");
    
})