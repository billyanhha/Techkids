const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    playerName1:{ type: String, require: true },
    playerName2:{ type: String, require: true },
    playerName3:{ type: String, require: true },
    playerName4:{ type: String, require: true },
    Score1 : { type : [] , required : true},
    Score2 : { type : [] , required : true},
    Score3 : { type : [] , required : true},
    Score4 : { type : [] , required : true},
    total1 : {type : Number , default : 0, required : true},
    total2 : {type : Number ,default : 0,  required : true},
    total3 : {type : Number ,default : 0,  required : true},
    total4 : {type : Number , default : 0, required : true},
    // Score : { type : []  , required : true},
});

module.exports = mongoose.model("Player", PlayerSchema);