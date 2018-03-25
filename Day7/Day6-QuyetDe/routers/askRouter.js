const express = require('express');
let Router = express.Router();
const QuestionSchema = require('../models/questionSchema')
const controller = require('../controller/questionController')
Router.get('/', (req, res) => {
    res.render('ask');
});

Router.post('/', (req, res) => {
    try {
        controller.create(req.body.ask);
        QuestionSchema.find({}, (err, data) => {
            if (err) console.log(err);

            arr = data;
            
            let id = arr.length-1
            res.redirect('/question/' + arr[id]._id)

            }
        )
    } catch (ex) {
        console.log(ex);
    }

});



module.exports = Router ;