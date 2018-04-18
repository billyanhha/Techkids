const express = require("express");
const router = express.Router();

const imageController = require("./controller");

router.get("/", (req, res) => { //getAllimage
  imageController
    .getAllImages(req.query.page || 1)
    .then(images => res.send(images))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.post("/", (req, res) => { ////Createimage
  imageController
    .createImage(req.body)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});


router.get("/:id", (req, res) => { //GetOneImage
  imageController
    .getImage(req.params.id)
    .then(image => res.send(image))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});
//Like image

router.post("/:id/like", (req, res) => { 
  imageController
    .likeImage(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

//Unilike
router.delete("/:id/like", (req, res) => { 
  imageController
    .unlikeImage(req.params.id)
    .then(data => res.send(data))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

//Update Image
router.put("/:id", (req, res) => {
  imageController
    .updateImage(req.params.id, req.body)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
})



//DELETE IMAGE actually it's was unactive , cuz no fucking body in this damn world delete an image , for fuck sake
router.delete("/:id", (req, res) => {  
  imageController
    .deleteImage(req.params.id)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
})


router.post("/:imageId/comments", (req, res) => { //add Comment
  imageController
    .addComment(req.params.imageId, req.body)
    .then(id => res.send(id))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});


///deleteComment
router.delete("/:imageId/comments/:commentId", (req, res) => { //add Comment
  imageController
    .deleteComment(req.params.imageId, req.params.commentId)
    .then(id => res.send(id))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});



//http://localhost:6969/api/images/5ad62843f2931a18f842a1da/comment/5ad62861f2931a18f842a1db

module.exports = router;