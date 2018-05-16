const express = require("express");
const router = express.Router();

const listController = require("./controller");

router.post("/", (req, res) => {
  listController
    .createList(req.body)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/", (req, res) => {
  listController
    .getAllLists()
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/top10", (req, res) => {
  listController
    .getTop10Lists()
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/:id", (req, res) => {
  listController
    .getOneList(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.put("/:id", (req, res) => {
  listController
    .updateOneList(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

// Sorry, it should be active = fase
// But in this situation, I'll delete it permanently
router.delete("/:id", (req, res) => {
  listController
    .deleteOneList(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.post("/:id/like", (req, res) => {
  listController
    .likeOneList(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.delete("/:id/like", (req, res) => {
  listController
    .unlikeOneList(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router;
