const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
    playerName1: { type: String, require: true, default: "Player1" },
    playerName2: { type: String, require: true, default: "Player2" },
    playerName3: { type: String, require: true, default: "Player3" },
    playerName4: { type: String, require: true, default: "Player4" },
    score_1: { type: [], default: [0, 0, 0, 0] },
    score_2: { type: [], default: [0, 0, 0, 0] },
    score_3: { type: [], default: [0, 0, 0, 0] },
    score_4: { type: [], default: [0, 0, 0, 0] },
    rowNumber: { type: Number, default: 4 },
    sum_1: { type: Number, default: 0 },
    sum_2: { type: Number, default: 0 },
    sum_3: { type: Number, default: 0 },
    sum_4: { type: Number, default: 0 },
});

module.exports = mongoose.model("Games", PlayerSchema);