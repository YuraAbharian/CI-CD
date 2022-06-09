const express = require('express')
const serverless = require('serverless-http')

const sum = require('./helper/sum')

const app = express()
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World')
})

router.get('/sum', (req, res) => {
  const { a, b } = req.query
  res.send(`RESULT: ${sum(a, b)}`)
})

app.use(`/.netlify/functions/api`, router)

module.exports = app
module.exports.handler = serverless(app)
