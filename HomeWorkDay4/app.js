const express = require('express');
let myApp = express();

myApp.use(express.static('public'));
myApp.get('/'  , (req , res) =>{
    res.sendfile(__dirname + "/public/Introduction.html");
} );


myApp.get('/frontendpractice'  , (req , res) =>{
    res.sendfile(__dirname + "/public/frontendpractice.html");
} );

myApp.get('/flexbox'  , (req , res) =>{
    res.sendfile(__dirname + "/public/flexbox.html");
} );

myApp.listen(2307  , (err)=>{
    if(err) console.log(err);
    console.log("Pass : Ban anh quy anh");
});