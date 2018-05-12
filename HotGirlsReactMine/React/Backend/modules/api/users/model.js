const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userModel = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return regex.test(value);
        },
        message: `Email is not a valid email address!`
      }
    },
    avatarUrl: {
      type: String, default: "https://sites.google.com/a/windermereprep.com/canvas/_/rsrc/1486400406169/home/unknown-user/user-icon.png?height=200&width=200",
      validate :{
        validator : function(value){
          const regex = /(https?:\/\/.*\.(?:png|jpg))/i;;
          return regex.test(value);

        } , 
        message : 'not valid link to use',
      }
    },
    active: { type: Boolean, default: true }
  },
  { timestamps: { createdAt: "createdAt" } }
);


userModel.pre("save", function (next) {
  if (!this.isModified("password")) { // TODO bug on update password
    console.log("Modified");
    return next();
  }

  bcrypt
    .genSalt(12)
    .then(salt => bcrypt.hash(this.password, salt))
    .then(hash => {
      this.password = hash;
      next();
    })
    .catch(err => next(err));
});

module.exports = mongoose.model("users", userModel);
