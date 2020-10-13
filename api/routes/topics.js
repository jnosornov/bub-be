const express = require('express')
const router = express.Router()

const Topic = require('../../models/Topic')

router.post('/topic', (req, res) => {
  const { matter } = req.body

  Topic.create({ matter }, function (err, topic) {
    if(err) return res.status(500).send({ message: 'topic couldnt be created'})

    console.log('topic', topic)
    res.send({ message: 'topic created' })
  })
})

module.exports = router

