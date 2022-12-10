
const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('RUNNING SERVER!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})