const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    title: { type: String, required: true },
    entry: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = reviewSchema
