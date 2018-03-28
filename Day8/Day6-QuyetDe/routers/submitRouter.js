const express = require('express');
let Router = express.Router();
const controller = require('../controller/questionController')
const QuestionSchema = require("../models/questionSchema");
Router.get('/', (req, res) => {
    // let questionlist = controller
    try {
        let arr = [];
        QuestionSchema.find({}, (err, data) => {
            if (err) console.log(err);

            arr = data;
            
            let id = Math.floor((Math.random() * arr.length));
            if (arr.length > 0) {
                res.render('submit', {
                    k : id,
                    question: arr[id].questionContent,
                    link: arr[id]._id,
                });
            } else {
                res.render('nothing');
            }
        })


    } catch (ex) {
        console.log(ex);

    }


});
Router.post('/', (req, res) => {
    let arr = [];
    QuestionSchema.find({}, (err, data) => {
        if (err) console.log(err);
        
        arr = data;
        
        let id = Math.floor((Math.random() * arr.length));
        if (arr.length > 0) {
            let question = arr[id];
            res.json({
                question
            })
        } else {
            res.render('nothing');
        }
        
    })
});

module.exports = Router;