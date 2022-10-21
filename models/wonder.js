const { Schema } = require('mongoose')

const wonderSchema = new Schema(
  {
    location: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = wonderSchema
