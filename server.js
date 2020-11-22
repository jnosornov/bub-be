const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const connectDB = require('./models/db/connectDB')

// Connect to database
const dbUri = 'mongodb://localhost:27017/connectionTest'
connectDB(dbUri)

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', require('./api/routes'))

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
})