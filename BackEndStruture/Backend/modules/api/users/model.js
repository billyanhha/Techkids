const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserSchema = new Schema({
    Username : {type : String , required : true },
    Password : {type : String , required : true },
    Email : {type : String , required : true },
    Avatar : {type : String , default : "www.default.com"},
    Active : {type : Boolean , default : true },
    },
    {timestamps : {createdAt : "createdAt"}},
)

module.exports = mongoose.model("User" , UserSchema)