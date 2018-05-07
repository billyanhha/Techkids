const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    playerName1: { type: String, default : "Player1", require: true },
    playerName2: { type: String, default : "Player2", require: true},
    playerName3: { type: String, default : "Player3", require: true},
    playerName4: { type: String, default : "Player4", require: true},
    score_1: { type: [], default: [0] },
    score_2: { type: [], default: [0] },
    score_3: { type: [], default: [0] },
    score_4: { type: [], default: [0] },
    sum_1: { type: Number, default: 0 },
    sum_2: { type: Number, default: 0 },
    sum_3: { type: Number, default: 0 },
    sum_4: { type: Number, default: 0 },
});

module.exports = mongoose.model("Games", PlayerSchema);