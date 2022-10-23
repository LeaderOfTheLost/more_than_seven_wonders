const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Wonder, Review } = require('./models')

const app = express()

//middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({ msg: 'route hit' })
})

//Wonder Routes
//Read all wonders --> GET
app.get('/wonders', async (req, res) => {
  let allWonders = await Wonder.find({})
  res.json(allWonders)
})

//Create wonder Route --> POST
app.post('/wonders', async (req, res) => {
  let createdWonder = await Wonder.create(req.body)
  res.json(createdWonder)
})

//Update wonder -->

//Review Routes
//Read all reviews --> GET
app.get('/reviews', async (req, res) => {
  let allReviews = await Review.find({})
  res.json(allReviews)
})

//Create review Route --> POST
app.post('/reviews', async (req, res) => {
  let reviewId = '6352beb79420b7470d7f0f10'
  let createdReview = Review.create(req.body)
  res.json(createdReview)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
