const Comment = require('../../models/Comment')

function getCommentsByTopic(topicId) {
  return new Promise((resolve, reject) => {
    Comment.find({ topicId }, (err, comments) => {
      if(err) resolve(err)
      resolve(comments)
    })
  })
}

module.exports = getCommentsByTopic