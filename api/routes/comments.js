const express = require('express')
const router = express.Router()

const Comment = require('../../models/Comment')

router.post('/comment', (req, res) => {
  const { description } = req.body

  Comment.create({ description }, function (err, comment) {
    if(err) return res.status(500).send({ message: 'comment couldnt be created' })

    console.log('comment', comment)
    res.send({ message: 'comment created' })
  })
})

module.exports = router