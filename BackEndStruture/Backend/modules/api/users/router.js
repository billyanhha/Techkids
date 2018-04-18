const express = require('express');
const router = express.Router();
const userController = require("./controller");

//Create
router.post("/", (req, res) => {
    userController.createUser(req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
})


//getAllUser
router.get("/", (req, res) => {
    userController
        .getAllUser(req.query.page || 1)
        .then(users => res.send(users))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});

//getOneuser
router.get("/:id", (req, res) => {
    userController
        .getOneUser(req.params.id)
        .then(users => res.send(users))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
});
//   <!-- User -->
//   <!-- UpdateUserName, UpdateUserEmail, UpdateUserAvatar, UpdateUserPassword (nên làm riêng 4 cái này chứ không nên gộp chung 1 hàm như image)
//   + DeleteUser -->
//name

router.put("/:id/username", (req, res) => {
    userController
        .updateUserName(req.params.id, req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
})

//email
router.put("/:id/email", (req, res) => {
    userController
        .updateEmail(req.params.id, req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
})
//avatar
router.put("/:id/avatar", (req, res) => {
    userController
        .updateAvatar(req.params.id, req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
})
//password
router.put("/:id/password", (req, res) => {
    userController
        .updatePassWord(req.params.id, req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
})


//del
router.delete("/:id", (req, res) => {
    userController
        .deleteUser(req.params.id)
        .then(result => res.send(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err);
        });
})








module.exports = router;