const express = require('express');
const handlebar = require('express-handlebars');
const parser = require('body-parser');
const controller = require('./fileController')
let app = express();


app.use(parser.urlencoded({
    extended: false,
}));

app.engine('handlebars', handlebar({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));
app.get('/ask', (req, res) => {
    res.render('ask');
});

app.post('/ask', (req, res) => {
    try {
        let questionlist = controller.myReadFile('./list.json');
        let id = questionlist.length + 1;
        let newquestion = {
            id: questionlist.length + 1,
            questionContent: req.body.ask,
            yes: 0,
            no: 0,
        }
        questionlist.push(newquestion),
            controller.myWriteFile('./list.json', questionlist, (err) => {
                if (err) console.log(err);

            })
        res.redirect('/question/' + id);
    } catch (ex) {
        console.log(ex);
    }

});
// Submid //
app.get('/', (req, res) => {
    let questionlist = controller.myReadFile('./list.json');
    let id = Math.floor((Math.random() * questionlist.length));
    let question = questionlist[id];
    if (questionlist.length > 0) {
        res.render('submit', {
            question: question.questionContent,
            link: question.id
        });
    } else {
        res.render('nothing');
    }
});



    // Question  //
    app.get('/question/:id', (req, res) => {
        let questionlist = controller.myReadFile('./list.json');
        let question = questionlist[req.params.id - 1];
        if(question.yes + question.no == 0){
            res.render('question', {
                question: question.questionContent,
                total : question.yes + question.no,
                percentY : 50,
                percentN : 50,
            })
        }
        else if(question.yes == 0 && question.no !=0){
            res.render('yes0', {
                question: question.questionContent,
                total : question.yes + question.no,
                percentN : 100,
            })
        }
        else if(question.yes != 0 && question.no ==0){
            res.render('no0', {
                question: question.questionContent,
                total : question.yes + question.no,
                percentY : 100,
            })
        }
        else{
        res.render('question', {
            question: question.questionContent,
            total : question.yes + question.no,
            percentY : Math.floor((question.yes/ ( question.yes + question.no)) *100),
            percentN : 100 - Math.floor((question.yes/ ( question.yes + question.no)) *100),
        })
        }
    });

    app.post('/ques/:id', (req, res) => {
        try {
            let questionlist = controller.myReadFile('./list.json');
            if (req.body.yes == "yes") {
                questionlist[req.params.id - 1].yes++;
                controller.myWriteFile('list.json' , questionlist , (err) =>{
                    if(err) console.log(err);
                    console.log("Write File Done!");
                    
                });
                res.redirect('/question/' + (req.params.id)) ;
            } 
            if (req.body.no == "no") {
                questionlist[req.params.id - 1].no++;
                controller.myWriteFile('list.json' , questionlist , (err) =>{
                    if(err) console.log(err);
                    console.log("Write File Done!");
                   
                });
                res.redirect('/question/' + (req.params.id));
            } 

        } catch (ex) {
            console.log(ex);

        }

    }),
// 


app.listen('1337', (err) => {
    if (err) console.log(err);
    console.log("PASS : ban anh quy anh");
});



//controller.myReadFile('pac')