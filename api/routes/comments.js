const express = require('express')
const router = express.Router()

const createComment = require('../services/createComment')

router.post('/comment', async (req, res) => {
  const { text, topicId, commentId, createdOn } = req.body
  const newComment = { text, topicId, commentId, createdOn }

  try {
    await createComment(newComment)
    res.status(200).send({ message: 'comment created' })
  } catch(error) {
    res.status(500).send({
      message: 'failed to create comment',
      error
    })
  }
})

module.exports = router