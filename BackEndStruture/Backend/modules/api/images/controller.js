const imageModel = require("./model");

const createImage = ({ imageUrl, title, description, createdBy}) => //Create Image
  new Promise((resolve, reject) => {
    imageModel
      .create({
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

const getAllImages = page => // Get all Image
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
      .select("_id imageUrl title description createdAt createdBy view like")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
});

const updateImage = (id, { imageUrl, title,description}) => //Update
  new Promise((resolve, reject) => {
    imageModel
      .update({
        _id: id
      }, {
        imageUrl,
        title,
        description,
      })
      .then(data => resolve({
        id: id
      }))
      .catch(err => reject(err));
});

const deleteImage = id => //Delete image
  new Promise((resolve, reject) => {
    imageModel
      .update({
        _id: id
      }, {
        active: false
      })
      .then(data => resolve({
        id: id
      }))
      .catch(err => reject(err));
});

const getImage = id => //Get one image
  new Promise((resolve, reject) => {
    imageModel
      .findOne({
        active: true,
        _id: id
      })
      .select(
        "_id imageUrl title description createdAt createdBy view like comment"
      )
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const addComment = (imageId, { createdBy, content}) => //And comment
  new Promise((resolve, reject) => {
    imageModel
      .update({
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
      .catch(err => reject(err));
  });

//deleteComment
const deleteComment = (imageId, id) => new Promise((resolve, reject) => {
  imageModel
    .update({
      _id: imageId
    }, {
      $pull: {
        comment: {
          _id: id
        }
      }
    })
    .then(data => resolve({
      id: id
    }))
    .catch(err => reject(err));
})
//like image
const likeImage = (id) => new Promise((resolve, reject) => {
  imageModel
    .update({
      _id: id
    }, {
      $inc: {
        like : 1,

      }
    })
    .then(data => resolve({
      id: id
    }))
    .catch(err => reject(err));
})

//unlike
const unlikeImage = (id) => new Promise((resolve, reject) => {
  imageModel
    .update({
      _id: id
    }, {
      $inc: {
        like : -1,

      }
    })
    .then(data => resolve({
      id: id
    }))
    .catch(err => reject(err));
})

// TODO like image
// TODO unlike image
// TODO delete comment: $pull: { comment: { _id: commentId } }

module.exports = {
  createImage,
  getAllImages,
  getImage,
  updateImage,
  deleteImage,
  addComment,
  deleteComment,
  likeImage,
  unlikeImage
};