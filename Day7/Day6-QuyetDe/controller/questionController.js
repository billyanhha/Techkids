const QuestionSchema = require("../models/questionSchema");
let create = (question , callback) => {
    let newQuestion = {
        questionContent : question,
        
    }
    QuestionSchema.create(newQuestion , (error)=>{
        if(error) console.log(error);
        err()
    }
);
    
    
};




module.exports = {
    create
}