const mongoose = require('mongoose')

const { Schema } = mongoose

var topicSchema = new Schema({
  slug: String,
  matter: String,
  createdOn: Date
})

var Topic = mongoose.model("Topic", topicSchema)
module.exports = Topic