const express = require('express')
const router = express.Router()

const Message = require('../../models/Message')

router.post('/message', (req, res) => {
  const { slug, description, topicSlug } = req.body

  Message.create({ slug, description, topicSlug, createdOn: new Date() }, function (err, message) {
    if(err) return res.status(500).send({ message: 'message couldnt be created' })

    console.log('message', message)
    res.send({ message: 'messagge created' })
  })
})

module.exports = router