const Player = require("../models/player.js");

let add = (name1 , name2 , name3 , name4, callback)=>{
    if(name1 === '') name1 = 'Player1';
    if(name2 === '') name2 = 'Player2';
    if(name3 === '') name3 = 'Player3';
    if(name4 === '') name4 = 'Player4';
    let NewPlayer = {
        playerName1: name1,
        playerName2: name2,
        playerName3: name3,
        playerName4: name4,
    }
    try {
        Player.create(NewPlayer, (err, doc)=>{
            callback(err, doc);
        });
    } catch (ex) {
        console.log("Exception: "+ex);
    }
};
let findPlayerByID= (id, callback)=>{
    try {
        Player.findOne({ _id: id }, (err, doc)=>{
            callback(err, doc);
        });
    } catch (ex) {
        console.log("Exception: "+ex)
    }
};
module.exports = {add ,findPlayerByID };