// ----Import thu vien ---
const express = require('express');
const handlebar = require('express-handlebars');
const parser = require('body-parser');
const mongoose = require('mongoose');

let app = express(); // all from express
const QuestionSchema = require("./models/questionSchema");
const SubmitRouter = require('./routers/submitRouter')
const AskRouter = require('./routers/askRouter')
const QuestionRouter = require('./routers/questionRouter')
const AnswRouter = require('./routers/answerRouter')
const controller = require('./controller/questionController')

// body 
app.use(parser.urlencoded({
    extended: false,
}));


app.engine('handlebars', handlebar({ // handlebars la default , handlebar la ten minh
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

// Roter
app.use('/', SubmitRouter);
app.use('/ask', AskRouter);
app.use('/question', QuestionRouter);
app.use('/ques', AnswRouter);

//monggose
mongoose.connect('mongodb://localhost/quyetdedb' ,(err) =>{
    if(err) console.log(err);
    console.log("Connect to database successfull");
});

// TAO Port
app.listen('1337', (err) => {
    if (err) console.log(err);
    console.log("PASS : ban anh quy anh");

    });
//controller.myReadFile('pac')
