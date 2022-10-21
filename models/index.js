const mongoose = require('mongoose')
const wonderSchema = require('./wonder')
const reviewSchema = require('./review')

const Review = mongoose.model('Review', reviewSchema)
const Wonder = mongoose.model('Wonder', wonderSchema)

module.exports = {
  Wonder,
  Review
}
