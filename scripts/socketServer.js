// WEBSOCKET
// --------------------------
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 47374 })

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message)
  })

  ws.on('error', function error() {
    console.log('Error')
  })

  ws.on('close', function close() {
    console.log('Disconnected')
  })

  ws.send('something')
})

// Setup broadcast
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data)
    }
  })
}

module.exports = wss