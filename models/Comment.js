const mongoose = require('mongoose')
const { Schema } = mongoose

var commentSchema = new Schema({
  text: String,
  topicId: String,
  commentId: String,
  createdOn: Date
})

var Comment = mongoose.model("Comment", commentSchema)
module.exports = Comment