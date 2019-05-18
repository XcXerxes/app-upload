const express = require('express')
const app = express()
const routes = require('./router')
const logger = require('morgan')
const bodyParser = require('body-parser')

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
    /* 让options请求快速返回 */
    res.send(200)
  } else {
    next()
  }
})
app.use('/', routes)

const PORT = process.env.PORT || 9090

app.listen(PORT, (err) => {
  if (err) {
    console.error(err)
  }
  console.log(`http running on http://localhost:${PORT}`)
})
