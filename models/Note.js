const mongoose = require("mongoose")

const Schema = mongoose.Schema

const noteSchema = new Schema({
  text: {
    type: String
  },
  // author:   {
  //   type: Schema.Types.ObjectId, ref: "User"
  // }
})

const Note = mongoose.model("Note", noteSchema)
module.exports = Note