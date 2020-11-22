const Topic = require('../../models/Topic')

function listTopics() {
  return new Promise((resolve, reject) => {
    Topic.find({ }, function (err, topics) {
      if(err) throw new Error(err)
      resolve(topics)
    })
  })
}

module.exports = listTopics