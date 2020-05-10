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
  const email = body.data.object.billing_details.email
  console.info('req.stripeEventType', body.type)
  console.info('email', email)

  await webhook.send({
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: 'New Feedback purchase'
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Email*\n${email}`
        }
      },
    ]
  })

  res.send({ message: req.body.type })
})
