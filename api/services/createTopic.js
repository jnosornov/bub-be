const Topic = require('../../models/Topic')

function createTopic(newTopic, cb) {
  return new Promise((resolve, reject) => {
    Topic.create(newTopic, function (err, topic) {
      if(err) throw new Error(err)
      resolve(topic)
    })
  })
}

module.exports = createTopic