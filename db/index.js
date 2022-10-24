const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successful connection to MongoDB')
  })
  .catch((e) => {
    console.log('Connection error', e.messages)
  })

const db = mongoose.connection

module.exports = db