const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const Discord = require('discord.js')
const webhookId = '709104591282896936'
const webhookToken = 'R8Rh0RmRLuEzJPfRBaal6rUULO76RV_cbFbCnlSz-iWl5dL70plLWDRd81QfPudlhK4q'
const hook = new Discord.WebhookClient(webhookId, webhookToken);

const app = module.exports = express()

app.use(cors({ origin: true }))
app.use(bodyParser.json())

function insertDecimal(num) {
  return Number((num / 100).toFixed(2));
}

app.post('/', async (req, res) => {
  const { body } = req
  const { email } = body.data.object.billing_details
  const { amount, description } = body.data.object

  hook.send(`
:heart: **New Feedback Purchased!**
**Email:** ${email}
**Amount:** $${insertDecimal(amount)}
**Description:** ${description}
  `)

  res.send({ message: req.body.type })
})
