const listModel = require("./model");

const createList = body =>
  new Promise((resolve, reject) => {
    listModel
      .create({
        listMovie: Object.values(body)
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getAllLists = () =>
  new Promise((resolve, reject) => {
    listModel
      .find()
      .select("_id like")
      .populate("listMovie", "title imageUrl mainActor link description")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getTop10Lists = () =>
  new Promise((resolve, reject) => {
    listModel
      .find()
      .sort({ like: -1 })
      .limit(10)
      .select("_id like")
      .populate("listMovie", "title imageUrl mainActor link description")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getOneList = listId =>
  new Promise((resolve, reject) => {
    listModel
      .findById(listId)
      .select("_id like")
      .populate("listMovie", "title imageUrl mainActor link description")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const updateOneList = (listId, body) =>
  new Promise((resolve, reject) => {
    listModel
      .findById(listId)
      .then(data => {
        let newList = new listModel(data);
        newList.listMovie = Object.values(body);
        newList
          .save()
          .then(dataAfter => resolve(dataAfter))
          .catch(err => reject(err));
      })
      .catch(err => reject(err));
  });

const deleteOneList = listId =>
  new Promise((resolve, reject) => {
    listModel
      .deleteOne({
        _id: listId
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const likeOneList = listId =>
  new Promise((resolve, reject) => {
    listModel
      .findByIdAndUpdate(
        listId,
        {
          $inc: { like: 1 }
        },
        { new: true }
      )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const unlikeOneList = listId =>
  new Promise((resolve, reject) => {
    listModel
      .findByIdAndUpdate(
        listId,
        {
          $inc: { like: -1 }
        },
        { new: true }
      )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

module.exports = {
  createList,
  getAllLists,
  getTop10Lists,
  getOneList,
  updateOneList,
  deleteOneList,
  likeOneList,
  unlikeOneList
};