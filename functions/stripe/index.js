const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const { IncomingWebhook } = require('@slack/webhook')
const slackWebhookUrl = 'https://hooks.slack.com/services/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'

const webhook = new IncomingWebhook(slackWebhookUrl, {
  icon_emoji: ':moneybag:',
})

const app = module.exports = express()

app.use(cors({ origin: true }))
app.use(bodyParser.json())

app.post('/', async (req, res) => {
  const { body } = req
  console.info('req.stripeEventType', body.type)
  const email = body.data.object.billing_details.email

  await webhook.send({
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "New Feedback purchase"
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": `*Email*\n${email}`
        }
      },
    ]
  })

  res.send({ message: req.body.type })
})
