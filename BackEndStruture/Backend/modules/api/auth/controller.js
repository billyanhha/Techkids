
const userController = require('../users/controller')
const bcrypt = require('bcryptjs');
const login = ({username , password}) =>
    new Promise((resolve , reject) =>{
        userController
        .getUserForAuth(username)
        .then(user =>{
            // Success
            // Incorrect user name
            // Incorrect password
            console.log(user);
            // Internal server error
            if(!user || !user.Password){
                reject({
                    status : 400 ,
                    err : "Incorrect username",
                })
            }
            else{
                bcrypt.compare(password , user.Password)
                .then(result => {
                    if(result){
                        resolve({username : user.Username , id : user._id })
                    } else {
                        reject({
                            status : 400 ,
                            err : 'Incorrect Password'
                        })
                    }
                    
                })
            }
        })
        .catch(err => reject({
            status : 501 ,
            err : err,
        }))
    })

module.exports = {
    login,
}