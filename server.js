const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')
const routes = require('./routes')

const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use('/', routes)
app.use(express.static(`${__dirname}/mtsw-frontend/build`))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/mtsw-frontend/build/index.html`)
})

app.get('/', (req, res) => {
  res.send({ msg: 'route hit' })
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
