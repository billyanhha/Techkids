const express = require('express');
let Router = express.Router();
const controller = require('../controller/fileController')
const QuestionSchema = require("../models/questionSchema");
Router.get('/:id', (req, res) => {
        QuestionSchema.find({_id : req.params.id}, (err, data) => {
            if (err) console.log(err);
            
            let question = data[0];
            
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
    })

    
});


module.exports = Router;