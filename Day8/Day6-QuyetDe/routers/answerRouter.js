
const mongoose = require('mongoose');
const express = require('express');
var ObjectID = require('mongoose').ObjectID
let Router = express.Router();
const QuestionController = require('../controller/questionController')
const QuestionSchema = require("../models/questionSchema");
Router.post('/:id', (req, res) => {
        try {
            var arr = [];
            QuestionSchema.find({}, (err, data) => {
                if (err) console.log(err);
                arr = data;
                let k = req.body.ss;
                
                
                if (req.body.yes == "yes") {                    
                    QuestionSchema.update(
                    {_id : arr[k]._id},
                    {$set :
                    {yes : arr[req.body.ss].yes +1},
            
                    
                    }, (err)=>{
                        console.log(err);
                        console.log("Update sucessful");
                        
                        
                    })
    
                    res.redirect('/question/' + (req.params.id));
                }
                if (req.body.no == "no") {
                    QuestionSchema.update({_id : arr[k]._id},
                    {$set :
                    {no : arr[req.body.ss].no +1}
                    } ,  (err)=>{
                        console.log(err);
                        console.log("Update sucessful");
                        
                        
                    })
                    res.redirect('/question/' + (req.params.id));
           
                }




                })
            
            
        } catch (ex) {
            console.log(ex);

        }


        

    }),

    module.exports = Router;