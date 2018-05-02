const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


const UserSchema = new Schema({
    Username: {
        type: String,
        required: true,
        unique: true
    }, // <= unique
    Password: {
        type: String,
        required: true ,
        // validate : {
        //     validator : function(v){
        //         return /^{6,}$/.test(v);
        //     },
        //     message : "Not valid password",
        // }
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        validate : {
            validator : function(v){
                const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return  regex.test(v);
            },
            message : "Not valid email",
        }
    },
    Avatar: {
        type: String,
        default: "www.default.com"
    },
    Active: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: {
        createdAt: "createdAt"
    }
}, )

UserSchema.pre('save', function (next) {
    if (!this.isModified('Password')) {
        return next();
    }
    bcrypt.genSalt(12) //Rainbow Table
        .then(salt => bcrypt.hash(this.Password, salt))
        .then(hash => {
            this.Password = hash;
            next();
        })
        .catch(err => next(err))

})


module.exports = mongoose.model("User", UserSchema)