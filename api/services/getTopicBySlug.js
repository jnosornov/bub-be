const Topic = require('../../models/Topic')

function getTopicBySlug(slug) {
  return new Promise((resolve, reject) => {
    Topic.findOne({ slug }, function (err, topic) {
      if(err) throw new Error(err)
      resolve(topic)
    })
  })
}

module.exports = getTopicBySlug