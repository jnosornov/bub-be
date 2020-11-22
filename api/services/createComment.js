const Comment = require('../../models/Comment')

function createComment(comment) {
  return new Promise((resolve, reject) => {
    Comment.create(comment, function (err, comment) {
      if(err) throw new Error(err)
      resolve(comment)
    })
  })
}

module.exports = createComment