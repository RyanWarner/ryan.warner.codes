const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = module.exports = express()

app.use(cors({ origin: true }))
app.use(bodyParser.json())

app.post('/', async (req, res) => {
  console.info('req.stripeEventType', req.body.type)

  res.send({ message: req.body.type })
})
