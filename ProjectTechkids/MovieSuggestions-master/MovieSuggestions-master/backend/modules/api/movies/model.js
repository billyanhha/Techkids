const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieModel = new Schema(
  {
    title: { type: String, required: true, unique: true, trim: true },
    imageUrl: { type: String, required: true, unique: true, trim: true },
    mainActor: { type: String, required: true, unique: true, trim: true },
    link: { type: String, required: true, unique: true, trim: true },
    description: { type: String, required: true, unique: true, trim: true }  
  },
  { timestamps: { createdAt: "createdAt" } }
);

module.exports = mongoose.model("movies", movieModel);