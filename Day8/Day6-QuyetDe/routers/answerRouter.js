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
                    QuestionController.updateAnswer("yes", arr[k]._id, (err) => {
                        if (err) console.log(err);
                        res.redirect('/question/' + (req.params.id));
                    })
                }
                if (req.body.no == "no") {
                    QuestionController.updateAnswer("no", arr[k]._id, (err) => {
                        if (err) console.log(err);
                        res.redirect('/question/' + (req.params.id));
                    })


                }




            })


        } catch (ex) {
            console.log(ex);

        }




    }),

    module.exports = Router;