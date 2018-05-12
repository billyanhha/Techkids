const express = require("express");
const router = express.Router();
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const imageController = require("./controller");
const authMiddleware = require("../auth/auth");

router.get("/", (req, res) => {
  imageController
    .getAllImages(req.query.page || 1)
    .then(images => res.send(images))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.post("/", authMiddleware.authorize , upload.single('image') , (req, res) => {
  req.body.id = req.session.userInfo.id;
  req.body.imageFile = req.file;
  console.log(req.file);

  imageController
    .createImage(req.body)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});


router.get("/:id", (req, res) => {
  imageController.getImage(req.params.id)
    .then(image => res.send(image))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});
router.get("/:id/allComment", (req, res) => {
  imageController.getAllComment(req.params.id)
    .then(image => res.send(image))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/:id/data", (req, res) => {
  imageController
    .getImageData(req.params.id)
    .then(images => {
      res.contentType(images.contentType);
      res.send(images.image);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.delete("/:id" , authMiddleware.authorize , (req , res) =>{
  imageController.deleteImage(req.params.id , req.session.userInfo.id)
  .then(result => res.send(result))
  .catch(err => {
    console.log(err);
    res.status(500).send(err)}
  )
})


router.post("/:imageId/comments",authMiddleware.authorize, (req, res) => {
  req.body.id = req.session.userInfo.id,
  
  imageController.addComment(req.params.imageId, req.body)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.delete("/:imageId/comments/:commentId",authMiddleware.authorize, (req, res) => {
  imageController.deleteComment(req.params.imageId, req.params.commentId)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.post("/:imageId/like",authMiddleware.authorize, (req, res) => {
  imageController.likeImage(req.params.imageId , req.session.userInfo.id)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});
router.delete("/:imageId/like",authMiddleware.authorize, (req, res) => {
  imageController.unlikeImage(req.params.imageId , req.session.userInfo.id)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.get("/:imageId/like",authMiddleware.authorize, (req, res) => {
  imageController.getLike(req.params.imageId , req.session.userInfo.id)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

router.delete("/:imageId/comments/:commentId",authMiddleware.authorize, (req, res) => {
  imageController.unlikeImage(req.params.imageId)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
});

module.exports = router;
