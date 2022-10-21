const mongoose = require('mongoose')
const wonderSchema = require('./wonder')

const Wonder = mongoose.model('Wonder', wonderSchema)

module.exports = {
  Wonder
}
