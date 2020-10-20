const mongoose = require('mongoose')
const { Schema } = mongoose

var messageSchema = new Schema({
  slug: String,
  description: String,
  topicSlug: String,
  createdOn: Date
})

var Message = mongoose.model("Message", messageSchema)
module.exports = Message