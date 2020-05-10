const functions = require('firebase-functions')
const stripe = require('./stripe')

exports.stripe = functions.https.onRequest(stripe)
