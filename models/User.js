const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    match: [/.+@.\..+/, "Please enter a valid e-mail address"],
    unique: true
  },
  
  password: {
    type: String,
    require: "Password is Required",
    match: [/\d+[A-Za-z]+/, `Password should have at least one and letter and one number`],
    validate: [function (input) {
      return input.length >= 6
    },
      "Password needs to be at 6 characters long"
    ]
  },

  savedArticles: [{type: Schema.Types.ObjectId, ref: "Article"}]

})

const User = mongoose.model("User", userSchema)
module.exports = User