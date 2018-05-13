const imageModel = require("./model");
const fs = require('fs');
const path = require('path');
const createImage = ({
  imageFile,
  title,
  description,
  id
}) =>
  new Promise((resolve, reject) => {
    imageModel
      .create({
        image: fs.readFileSync(imageFile.path),
        contentType: imageFile.mimetype,
        title,
        description,
        createdBy: id
      })
      .then(data => resolve({
        id: data._id
      }))
      .catch(err => reject(err));
  });

const getAllImages = page =>
  new Promise((resolve, reject) => {
    imageModel
      .find({
        active: true
      })
      .sort({
        createdAt: -1
      })
      .skip((page - 1) * 20)
      .limit(20)
      .select("_id title description createdAt view like comment")
      .populate("comment.createdBy", "username avatarUrl")
      .populate("createdBy", "username avatarUrl")
      .exec()
      .then(data => {
        resolve(
          data.map(img =>


            Object.assign({}, img._doc, { imageUrl: `localhost:6969/api/images/${img._id}/data` })
          )
        )
      })
      .then(result => resolve(result))
      .catch(err => reject(err));
  });
const getAuthoRise = (imageId, id) =>
  new Promise((resolve, reject) => {
    imageModel
      .findOne({
        active: true,
        _id: imageId,
         createdBy: {_id : id}
      })
      .then(data => {
        resolve(
          data
        )
      })
      .then(result => resolve(result))
      .catch(err => reject(err));
  });


const updateImage = (id, {
  imageUrl,
  title,
  description
}) =>
  new Promise((resolve, reject) => {
    imageModel
      .update({
        _id: id
      }, {
          imageUrl,
          title,
          description,
          createdBy
        })
      .then(data => resolve({
        id: data._id
      }))
      .catch(err => reject(err));
  });

const deleteImage = (id, userId) =>
  new Promise((resolve, reject) => {
    imageModel
      .update({
        _id: id,
        createdBy: userId
      }, {
          active: false
        })
      .then(data => resolve({
        id: data._id
      }))
      .catch(err => reject(err));
  });

const getImage = id =>
  new Promise((resolve, reject) => {
    imageModel
      .update(
        {
          active: true,
          _id: id
        },
        {
          $inc: {
            view: 1
          }
        }
      )
      .then(result =>
        imageModel
          .findOne({
            active: true,
            _id: id
          })
          .select("_id title description createdAt view like comment")
          .populate("comment.createdBy", "username avatarUrl")
          .populate("createdBy", "username avatarUrl")
          .exec()
      )
      .then(data =>
        resolve(
          Object.assign({}, data._doc, { imageUrl: `localhost:6969/api/images/${id}/data` })
        )
      )
      .catch(err => reject(err));
  });

const getImageData = id =>
  new Promise((resolve, reject) => {
    imageModel
      .findOne({
        active: true,
        _id: id
      })
      .select("image contentType")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const addComment = (imageId, { id, content }) =>
  new Promise((resolve, reject) => {
    imageModel
      .update({
        _id: imageId
      }, {
          $push: {
            comment: {
              createdBy: id,
              content,
            }
          }
        })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const deleteComment = (imageId, commentId , userId) =>
  new Promise((resolve, reject) => {
    imageModel
      .update({
        _id: imageId,
      }, {
          $pull: {
            comment: {
              _id: commentId,
              createdBy : userId
            }
          }
        })
      .then(data =>  resolve(data ))
      .catch(err => reject(err));
  });

const likeImage = (imageId, id) =>
  new Promise((resolve, reject) => {
    imageModel
      .update({
        _id: imageId
      }, {
          $push: {
            like: {
              createdBy: id,
            }
          }
        })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getLike = (imageId, id) =>
  new Promise((resolve, reject) => {
    imageModel
      .findOne({
        _id: imageId, like: { $elemMatch: { createdBy: id } }
      })

      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const unlikeImage = (imageId, id) =>
  new Promise((resolve, reject) => {
    imageModel
      .update({
        _id: imageId
      }, {
          $pull: {
            like: {
              createdBy: id,
            }
          }
        })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
const getAllComment = id =>
  new Promise((resolve, reject) => {
    imageModel
      .findOne({
        active: true,
        _id: id
      })
      .select("_id title description createdAt view like comment")
      .populate("comment.createdBy", "username avatarUrl")
      .populate("createdBy", "username avatarUrl")
      .exec()

      .then(data =>
        resolve(
          Object.assign({}, data._doc, { imageUrl: `localhost:6969/api/images/${id}/data` })
        )
      )
      .catch(err => reject(err));
  });
module.exports = {
  createImage,
  getAllImages,
  getImage,
  getImageData,
  updateImage,
  deleteImage,
  addComment,
  deleteComment,
  likeImage,
  unlikeImage,
  getLike,
  getAllComment,
  getAuthoRise,
};