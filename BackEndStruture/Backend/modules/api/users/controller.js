const usermodel = require('./model');
//Create Image
const createUser = ({ Username, Password, Email,}) =>
    new Promise((resolve, reject) => {
        usermodel
            .create({
                Username,
                Password,
                Email,
            })
            .then(data => resolve({
                id: data._id
            }))
            .catch(err => reject(err));
    });

//GetAllUser
const getAllUser = page =>
    new Promise((resolve, reject) => {
        usermodel
            .find({
                Active: true
            })
            .sort({
                createdAt: -1
            })
            .skip((page - 1) * 20)
            .limit(20)
            .select("_id Username Email Avatar createdAt Password")
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err));
    });

//GetOneUser
const getOneUser = id =>
    new Promise((resolve, reject) => {
        usermodel
            .findOne({
                Active: true,
                _id: id
            })
            .select(
                "_id Username Email Avatar createdAt"
            )
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
//UpdateUserName
    const updateUserName= (id, {Username}) => //Update
    new Promise((resolve, reject) => {
        usermodel
        .update({
            _id: id
        }, {
            Username
        })
        .then(data => resolve({
            id: id
        }))
        .catch(err => reject(err));
    });
 //UpdateEmail
    const updateEmail= (id, {Email}) => //Update
    new Promise((resolve, reject) => {
        usermodel
        .update({
            _id: id
        }, {
            Email
        })
        .then(data => resolve({
            id: id
        }))
        .catch(err => reject(err));
    });
 //UpdateAvatar
    const updateAvatar= (id, {Avatar}) => //Update
    new Promise((resolve, reject) => {
        usermodel
        .update({
            _id: id
        }, {
            Avatar
        })
        .then(data => resolve({
            id: id
        }))
        .catch(err => reject(err));
    });
 //UpdatePassWord
    const updatePassWord= (id, {Password}) => //Update
    new Promise((resolve, reject) => {
        usermodel
        .update({
            _id: id
        }, {
            Password
        })
        .then(data => resolve({
            Password
        }))
        .catch(err => reject(err));
    });   

    //deleteuser
    const deleteUser= (id) => //Update
    new Promise((resolve, reject) => {
        usermodel
        .update({
            _id: id
        }, {
            Active : false
        })
        .then(data => resolve(
            data
        ))
        .catch(err => reject(err));
    });   

const getUserForAuth = username =>
    new Promise((resolve , reject) => {
        usermodel.findOne({Username : username})
        .select("Username Password _id")
        .then(user => resolve(user))
        .catch(err => reject(err))
});

module.exports = {
    createUser,
    getAllUser,
    getOneUser ,
    updateUserName,updateEmail
    ,updateAvatar , updatePassWord
    ,deleteUser
    ,getUserForAuth
}