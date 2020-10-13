const mongoose = require('mongoose')
const { Schema } = mongoose

var messageSchema = new Schema({
  slug: String,
  description: String
})

var Message = mongoose.model("Message", messageSchema)
module.exports = Message