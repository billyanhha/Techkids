
const imageModel = require('./model');

const createImage = ({
    imageUrl,
    title,
    desciption,
    createdBy
}) => new Promise((resolve, reject) => {
    imageModel.create({
            imageUrl,
            title,
            desciption,
            createdBy
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err))
});

const getAllImages = page => new Promise((resolve, reject) => {
    imageModel.find({
            "active": true
        })
        .sort({
            createdAt: -1
        })
        .skip((page - 1) * 20)
        .limit(20)
        .select("_id imageUrl title description createdAt createdBy view like ")
        .exec()
        .then(data => resolve(data))
        .catch(err => reject(err))
})



const UpdateImage = (id, {
    imageUrl,
    title,
    desciption
}) => new Promise((resolve, reject) => {
    imageModel.update({
            _id: id
        }, {
            imageUrl,
            title,
            desciption,
            createdBy
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err))
})

const deleteImage = id => new Promise((resolve, reject) => {
    imageModel.update({
            _id: id
        }, {
            active: false,
        })
        .then(data => resolve({
            id: data._id
        }))
        .catch(err => reject(err))
})

const getImage = id =>
    new Promise((resolve, reject) => {
        imageModel
            .findOne({
                active: true,
                _id: id
            })
            .select("_id  imageUrl title description createdAt createdBy view like comment")
            .exec()
            .then(data => resolve(data))
            .catch(err => reject(err))
    })

const addComment = (imageId, {
        createdBy,
        content
    }) =>
    new Promise((resolve, reject) => {
        imageModel.update({
            _id: imageId

        }, {
            $push: {
                comment: {
                    createdBy,
                    content
                }
            }
        })
        .then(data => resolve(data))
        .catch(err => reject(err))
    })


//TODO like image
//Todo unlike image
//Todo delete comment
module.exports = {
    createImage,
    getAllImages,
    UpdateImage,
    deleteImage,
    getImage ,
    addComment
}