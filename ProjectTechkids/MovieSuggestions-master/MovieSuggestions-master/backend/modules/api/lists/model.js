const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listModel = new Schema(
  {
    listMovie: [{ type: Schema.Types.ObjectId, ref: "movies" }],
    like: { type: Number, default: 0 }
  },
  { timestamps: { createdAt: "createdAt" } }
);

module.exports = mongoose.model("lists", listModel);
