const movieModel = require("./model");

const createMovie = ({ title, imageUrl, mainActor, link, description }) =>
  new Promise((resolve, reject) => {
    imageUrl = imageUrl.startsWith("http://pubvn.tv/")
      ? imageUrl
      : `http://pubvn.tv/${imageUrl}`;
    movieModel
      .create({
        title,
        imageUrl,
        mainActor,
        link,
        description
      })
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getAllMovies = page =>
  new Promise((resolve, reject) => {
    movieModel
      .find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * 20)
      .limit(20)
      .select("title imageUrl mainActor link description")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getAllMoviesId = page =>
  new Promise((resolve, reject) => {
    movieModel
      .find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * 20)
      .limit(20)
      .select("_id")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getOneMovie = movieId =>
  new Promise((resolve, reject) => {
    movieModel
      .findById(movieId)
      .select("title imageUrl mainActor link description")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const updateOneMovie = (
  movieId,
  { title, imageUrl, mainActor, link, description }
) =>
  new Promise((resolve, reject) => {
    movieModel
      .findByIdAndUpdate(
        movieId,
        {
          $set: { title, imageUrl, mainActor, link, description }
        },
        { new: true }
      )
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

module.exports = {
  createMovie,
  getAllMovies,
  getAllMoviesId,
  getOneMovie,
  updateOneMovie
};
