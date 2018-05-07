

const gamesModel = require('./model');

// const postAllScore = (playerName_1 , playerName_2 , playrName_3 , playerName_4 , score_1 , score_2 , score_3 , score_4 , sum_1 , sum_2 , sum_3 , sum_4) => 
//     new Promise = (resolve , reject) =>{
//         gamesModel.create({
//             playerName1 : playerName_1 ,
//             playerName2 : playerName_2 ,
//             playerName3 : playerName_3 ,
//             playerName4 : playerName_4 ,
//             score_1 : score_1,
//             score_2 : score_2,
//             score_3 : score_3,
//             score_4 : score_4,
//             sum_1 : sum_1,
//             sum_2 : sum_2,
//             sum_3 : sum_3,
//             sum_4 : sum_4,
//         })
//         .then(data => resolve(data))
//         .catch(err => reject(err))
//     }
const createGame = ({ playerName_1, playerName_2, playerName_3, playerName_4 }) =>
    new Promise((resolve, reject) => {
        gamesModel.create({
            playerName1: playerName_1,
            playerName2: playerName_2,
            playerName3: playerName_3,
            playerName4: playerName_4,
        })
            .then(data => resolve(data))
            .catch(err => reject(err))
    })

const upDateGame = (gameId, { score_1, score_2, score_3, score_4, sum_1, sum_2, sum_3, sum_4 }) =>
    new Promise((resolve, reject) => {
        gamesModel.update({ _id: gameId },
            {
                score_1: score_1,
                score_2: score_2,
                score_3: score_3,
                score_4: score_4,
                sum_1: sum_1,
                sum_2: sum_2,
                sum_3: sum_3,
                sum_4: sum_4,
            }
        )
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
const getAllInfo = (gameId) =>
    new Promise((resolve, reject) => {
        gamesModel.findOne({ _id: gameId }

        )
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
const addRound = (gameId) =>
    new Promise((resolve, reject) => {
        gamesModel.update({ _id: gameId },
            {
                $inc: { rowNumber: 1 } 
            }
        )
            .then(data => resolve(data))
            .catch(err => reject(err))
    })

module.exports = {
    createGame,
    upDateGame,
    getAllInfo,
    addRound,
}