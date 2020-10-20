const mongoose = require('mongoose')
const { Schema } = mongoose

var commentSchema = new Schema({
  description: String,
  messageSlug: String,
  createdOn: Date
})

var Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment