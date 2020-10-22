const express = require('express')
const router = express.Router()

const Topic = require('../../models/Topic')

router.get('/topic/:slug', (req, res) => {
  const { slug } = req.params

  Topic.findOne({ slug }, function (err, topic) {
    if(err) return res.status(500).send({ message: 'topic couldnt be found' })

    if(!topic) return res.status(404).send({ message: 'topic couldnt be found' })

    res.send({ topic })
  })
})

router.get('/topic', (req, res) => {
  Topic.find({ }, function (err, topics) {
    if(err) return res.status(500).send({ message: 'no topics were found' })

    res.send({ topics })
  })
})

router.post('/topic', (req, res) => {
  const { matter } = req.body
  const slug = matter.replace(/ /g, '-')

  Topic.create({ slug, matter, nickname: 'Deadpool', createdOn: new Date() }, function (err, topic) {
    if(err) return res.status(500).send({ message: 'topic couldnt be created'})

    console.log('topic', topic)
    res.send({ message: 'topic created' })
  })
})

module.exports = router

