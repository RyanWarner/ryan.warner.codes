const functions = require('firebase-functions')

exports.feedbackPurchase = functions.https.onRequest(async (req, res) => {
  console.log('Feedback Purchase', req)
})
