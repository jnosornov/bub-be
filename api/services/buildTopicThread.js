const getCommentsByTopic = require('./getCommentsByTopic')

async function buildTopicThread(topic) {
  const { id: topicId } = topic

  const comments = await getCommentsByTopic(topicId)

  return comments

  // const comments = [
  //   {
  //     description: 'Comment description',
  //     thread: [
  //       {
  //         description: 'Comment description'
  //       },
  //       {
  //         description: 'Comment description',
  //       }
  //     ]
  //   },
  //   {
  //     description: 'Comment description',
  //     thread: []
  //   },
  //   {
  //     description: 'Comment description',
  //     thread: []
  //   }
  // ]

  // return comments
}

module.exports = buildTopicThread