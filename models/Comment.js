const mongoose = require('mongoose')
const { Schema } = mongoose

var commentSchema = new Schema({
  description: String
})

var Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment