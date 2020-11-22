const express = require('express')
const router = express.Router()

const getTopicBySlug = require('../services/getTopicBySlug')
const buildTopicThread = require('../services/buildTopicThread')

router.get('/thread/topic/:slug', async (req, res) => {
  const { slug } = req.params
  try {
    const topic = await getTopicBySlug(slug)
    const comments = await buildTopicThread(topic)
    res.status(200).send({ topic, comments })
  } catch(error) {
    res.status(500).send({
      message: 'failed to retrieve topic thread',
      error
    })
  }
})

module.exports = router