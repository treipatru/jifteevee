// SETUP
// --------------------------
const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')

require('dotenv').config()
require('./scripts/socketServer')
require('./scripts/bot')

// ROUTES
// --------------------------
let index = require('./routes/index')

// APP
// --------------------------
let app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', index)

// HANDLERS
// --------------------------
// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // Render the error page
  res.status(err.status || 500)
  res.render('error')
})

// EXPORT
// --------------------------
module.exports = app