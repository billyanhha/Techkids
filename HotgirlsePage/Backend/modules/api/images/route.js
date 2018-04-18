const express = require('express');
const Router = express.Router();


const imageController = require('./controller');
Router.get('/', (req, res) => {
    imageController
        .getAllImages(req.query.page || 1)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
            //200 -> 299 : ok 
            //300 redirect 
            //403 ko duoc phep
            //404 not fount 
            //500 
        })
})

Router.post('/', (req, res) => {
    imageController
        .createImage(req.body)
        .then(result => res.send(result))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
        })
})

Router.get('/:id', (req, res) => {
    imageController
        .getImage(req.params.id)
        .then(images => res.send(images))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
            //200 -> 299 : ok 
            //300 redirect 
            //403 ko duoc phep
            //404 not fount 
            //500 
        })
})

Router.post('/:imageId/comments', (req, res) => {
    imageController
        .addComment(req.params.imageId, req.body)
        .then(id => res.send(id))
        .catch(err => {
            console.error(err);
            res.status(500).send(err)
            //200 -> 299 : ok 
            //300 redirect 
            //403 ko duoc phep
            //404 not fount 
            //500 
        })
})


module.exports = Router;