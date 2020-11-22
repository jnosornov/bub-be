const express = require('express')
const router = express.Router()

const getTopicBySlug = require('../services/getTopicBySlug')
const createTopic = require('../services/createTopic')
const listTopics = require('../services/listTopics')

router.get('/topic/:slug', async (req, res) => {
  const { slug } = req.params

  try {
    const topic = await getTopicBySlug(slug)
    res.status(200).send(topic)
  } catch(error) {
    res.status(500).send({
      message: 'failed to retrieve topic',
      error
    })
  }
})

router.get('/topic', async (req, res) => {
  try {
    const topics = await listTopics()
    res.status(200).send({ topics })
  } catch(err) {
    res.status(500).send({ message: 'failed to retrieve topics' })
  }
})

router.post('/topic', async (req, res) => {
  const { matter, body, createdOn } = req.body
  const slug = matter.replace(/ /g, '-')

  const newTopic = { slug, matter, body, createdOn }
  
  try {
    await createTopic(newTopic)
    console.log(topic)
    res.status(200).send({ message: 'topic created' })
  } catch(err) {
    res.status(500).send({ message: 'failed to create topic' })
  }
})

module.exports = router

