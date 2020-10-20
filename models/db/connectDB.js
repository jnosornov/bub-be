const mongoose = require('mongoose')

module.exports = function(uri) {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).catch(error => console.log(error))

  mongoose.connection.on('connected', function() {
    console.log(`Sucessfully connected to database: ${uri}`)
  })
}