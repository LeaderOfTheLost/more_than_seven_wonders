const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://LeaderOfTheLost:DCnumber8@generalassemblycluster0.whwjvp6.mongodb.net/sevenWondersDB'
  )
  .then(() => {
    console.log('Successful connection to MongoDB')
  })
  .catch((e) => {
    console.log('Connection error', e.messages)
  })

const db = mongoose.connection

module.exports = db
