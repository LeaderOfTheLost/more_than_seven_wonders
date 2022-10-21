const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Wonder } = require('./models')

const app = express()

//middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'route hit' })
})

//Wonder Routes
//Create Wonder Route
app.post('/wonders', async (req, res) => {
  let createdWonder = await Wonder.create(req.body)
  res.send(createdWonder)
})

app.listen(PORT, () => {
  console.log(`Express server listening on port: ${PORT}`)
})
