const express = require('express');
const router = express.Router();
const gamesController = require('./controller')

router.get('/:id' , (req , res) =>{
    gamesController.getAllInfo(req.params.id)
    .then(data => res.send(data))
    .catch(error => console.log(error)
    )
})

router.post('/' , (req , res) =>{
    gamesController.createGame(req.body)
    .then(data => res.send(data))
    .catch(error => console.log(error)
    )
})


router.put('/:id' , (req , res) =>{
    gamesController.upDateGame(req.params.id , req.body)
    .then(data => res.send(data))
    .catch(error => console.log(error)
    )
})




module.exports = router;


