const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const controller = require('./Controllers/PlayerController');

let app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.engine('handlebars', handlebar({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home')
})
app.post('/', (req, res) => {
    controller.add(req.body.player1, req.body.player2, req.body.player3, req.body.player4, (err, doc) => {
        if (err) console.log(err);
        res.redirect("/games/" + doc._id);
    })
})
app.get('/games/:id', (req, res) => {
    controller.findPlayerByID(req.params.id, (err, doc) => {
        if (err) console.log(err);
        res.render('game', {
            player1: doc.playerName1,
            player2: doc.playerName2,
            player3: doc.playerName3,
            player4: doc.playerName4,
            id: doc._id,
            total1 : doc.total1,
            total2 : doc.total2,
            total3 : doc.total3,
            total4 : doc.total4,
        });
    })
})
app.post('/games/:id', (req, res) => {
    controller.findPlayerByID(req.params.id, (err, doc) => {
        if (err) console.log(err);
        let Score_1 = req.body.player0;
        let Score_2 = req.body.player1;
        let Score_3 = req.body.player2;
        let Score_4 = req.body.player3;
        let arr = [];
        arr.push(Score_1);
        arr.push(Score_2);
        arr.push(Score_3);
        arr.push(Score_4);
        let total = new Array(0,0,0,0);
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (!Number(arr[i][j])) arr[i][j] = '0';
                arr[i][j] = Number(arr[i][j]);
                total[i] += Number(arr[i][j]);
            }

        }
        doc.Score1 = arr[0];
        doc.Score2 = arr[1];
        doc.Score3 = arr[2];
        doc.Score4 = arr[3]; 
        doc.total1 = total[0]; doc.total2 = total[1]; doc.total3 = total[2]; doc.total4 = total[3];
        doc.save();
        res.redirect("/ajax/" + doc._id);
    })
})
app.get('/ajax/:id', (req, res) => {
    controller.findPlayerByID(req.params.id, (err, doc) => {
        if (err) console.log(err);
        let len = doc.Score1.length;
        let arr = [];
        arr.push(doc.Score1);
        arr.push(doc.Score2);
        arr.push(doc.Score3);
        arr.push(doc.Score4);
        let brr=new Array();
        for (let i = 0; i < len; i++) {
            brr[i] = new Array();
            brr[i].push(arr[0][i]);
            brr[i].push(arr[1][i]);
            brr[i].push(arr[2][i]);
            brr[i].push(arr[3][i]);
        }

        res.render('view', {
            player1: doc.playerName1,
            player2: doc.playerName2,
            player3: doc.playerName3,
            player4: doc.playerName4,
            id: doc._id,
            doc: brr,
            total1 : doc.total1,
            total2 : doc.total2,
            total3 : doc.total3,
            total4 : doc.total4,
        });
    })
})
app.post('/ajax/:id', async (req, res) => {
    controller.findPlayerByID(req.params.id, (err, doc) => {
        if (err) console.log(err);
         res.send(doc);
    })
})
mongoose.connect('mongodb://localhost/player', (err) => {
    if (err) console.log(err);
    console.log("Database connect success!");
});
app.listen(8080, (err) => {
    if (err) console.log(err);
    console.log("connect success");

})