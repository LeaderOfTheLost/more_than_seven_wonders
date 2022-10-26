const { Schema } = require('mongoose')

const wonderSchema = new Schema(
  {
    location: { type: String, required: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'review_id' }]
  },
  { timestamps: true }
)

module.exports = wonderSchema
