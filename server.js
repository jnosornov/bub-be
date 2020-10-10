const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

console.log('hello world')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Stranger')
})

app.listen(port, () => {
  console.log(`app running on port ${port}`)
})