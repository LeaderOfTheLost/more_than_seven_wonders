const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const routes = require('./routes')
const { Wonder, Review } = require('./models')

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send({ msg: 'route hit' })
})
app.use('/api', routes)

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
app.put('/wonders', async (req, res) => {
  let updatedWonder = await Wonder.updateOne(
    { location: `${req.body.location}` },
    { description: `${req.body.description}` }
  )
  res.json(updatedWonder)
})
//Delete wonder
app.delete('/wonders', async (req, res) => {
  let deletedWonder = await Wonder.deleteOne(req.body)
  res.json(deletedWonder)
})
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
//Update review -->
app.put('/reviews', async (req, res) => {
  let updatedReview = await Review.updateOne(
    { location: `${req.body.title}` },
    { description: `${req.body.entry}` }
  )
  res.json(updatedReview)
})
//Delete review
app.delete('/reviews', async (req, res) => {
  let deletedReview = await Review.deleteOne(req.body)
  res.json(deletedReview)
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
