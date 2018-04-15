const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const imageModel = new Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    createBy: {
        type: String,
        required: true
    },
    view: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    actice: {
        type: Boolean,
        default: true
    },
    comment: {
        type: [commentModel],
        default: []
    }
}, {
    timestamps: true
});

const commentModel = new Schema({
    createBy : {type : String}
},
    {timestamps : true}
);

module.exports = mongoose.model("images" , imageModel)