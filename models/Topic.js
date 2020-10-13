const mongoose = require('mongoose')

const { Schema } = mongoose

var topicSchema = new Schema({
  matter: String
})

var Topic = mongoose.model("Topic", topicSchema)
module.exports = Topic