const express = require('express')
const router = express.Router()

router.use(require('./topics'))
router.use(require('./comments'))
router.use(require('./thread'))

module.exports = router