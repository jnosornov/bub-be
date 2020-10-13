const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const connectDB = require('./models/db/connectDB')

// Connect to database
const dbUri = 'mongodb://localhost:27017/connectionTest'
connectDB(dbUri)

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', require('./api/routes'))

app.get('/', (req, res) => {
  res.send('Hello Stranger')
})

app.listen(port, () => {
  console.log(`app running on port ${port}`)
})