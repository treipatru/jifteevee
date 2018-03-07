const events = require('events')
const wss = require('./socketServer')
let emitter = new events.EventEmitter()

// Gif events
let liveUrl = ''

let gifNext = function (data) {
  liveUrl = data
  wss.broadcast(data)
  console.log('changed to ' + data)
}
emitter.on('gifNext', gifNext);

module.exports = emitter