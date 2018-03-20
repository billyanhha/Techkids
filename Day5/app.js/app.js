const express = require('express');
const handlebar = require('express-handlebars');
const fileController = require('./fileController');
let app = express();
const bodyParser = require('body-parser');
app.engine('handlebars', handlebar({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static('public'));
app.get('/ask', (req, res) => {
    res.render('ask');
});

app.post('/ask', (req, res) => {
    let yesNum = 0;
    let noNum = 0;
    let questionlist = [...fileController.MyreadFileSync('./data.json')];
    let question = questionlist.length + 1;
    let newData = {
        id: question,
        questionContent: req.body.question,
        yes: yesNum,
        no: noNum,
    };
    questionlist.push(newData);
    fileController.WriteFile('./data.json', questionlist, (err) => {
        if (err) {
            console.log(err);

        }
        res.redirect('/question/' + question);
        console.log("OK");
    });

});
app.get('/', (req, res) => {
    let questionlist = [...fileController.MyreadFileSync('./data.json')];
    if (questionlist.length > 0) {
        let id = Math.floor((Math.random() * (questionlist.length)));
        let question1 = (questionlist[id]);
        mg = id + 1;
        res.render('ok', {
            question: question1.questionContent,
            yes : question1.yes,
            no : question1.no,
            
        });

    } else {
        let question = 'There are no question available';
        res.render('empty', {
            question
        });
        
    }
    
});
//

app.post('/question' , (req, res) =>{
    let questionlist = [...fileController.MyreadFileSync('./data.json')];
    let question1 = questionlist[mg - 1];
    
    let x_1 = req.body.yes;
    let x_2 = req.body.no;
    
    if(questionlist.length >= 1){
        if(x_1 == "1") {
            question1.yes++;
            fileController.WriteFile('./data.json', questionlist, (err) => {
            if (err) {
            console.log(err);
            }
             });
            res.redirect('/question/' + mg);
            
        }
        
        else if(x_2 == "0") {
            question1.no += 1;
            fileController.WriteFile('./data.json', questionlist, (err) => {
            if (err) {
            console.log(err);
            }
            });
            res.redirect('/question/'+mg);
        }      
    } 
    res.end()
});

app.get('/question/:id', (req, res) => {
    let questionlist = [...fileController.MyreadFileSync('./data.json')];
    let question = questionlist[req.params.id - 1];
    mg = req.params.id ;
    res.render('question', {
        question: question.questionContent,
        yes : question.yes,
        no : question.no,
        
    });
    
});



app.listen(1337, (err) => {
    if (err) console.log(err);
    else console.log("Pass : Ban anh Quy Anh");

});