const express = require('express')
const sum = require('./helper/sum')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/sum', (req, res) => {
  const { a = 0, b = 0 } = req.query
  res.send(`RESULT: ${sum(a, b)}`)
})

const PORT = 3000
app.listen(PORT, () => {
  console.log('TEST APP IS APP ON PORT:', PORT)
})
