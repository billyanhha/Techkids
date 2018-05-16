const express = require("express");
const router = express.Router();

const movieController = require("./controller");

router.post("/", (req, res) => {
  movieController
    .createMovie(req.body)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/", (req, res) => {
  movieController
    .getAllMovies(req.query.page || 1)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/id", (req, res) => {
  movieController
    .getAllMoviesId(req.query.page || 1)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/:id", (req, res) => {
  movieController
    .getOneMovie(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.put("/:id", (req, res) => {
  movieController
    .updateOneMovie(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router;
