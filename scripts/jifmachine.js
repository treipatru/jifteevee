const bus = require('./eventBus')
const wss = require('./socketServer')
require('./bot')

const gifs = [
  'https://media.giphy.com/media/1k2YhdutgkQzJWnsyp/giphy.gif',
  'https://media.giphy.com/media/jbxQLpOKN2URa/giphy.gif',
  'https://media.giphy.com/media/rAZEnOu0KHQK4/giphy.gif',
  'https://media.giphy.com/media/3o85xnhOLdobGPfbHO/giphy.gif',
  'https://media.giphy.com/media/xUOwGd2sXd4VwJ0Y48/giphy.gif'
]

setInterval( function() {
    wss.broadcast(gifs[Math.floor(Math.random() * gifs.length)])
  },
  5000
)

// BUS EXAMPLE
// --------------------------
let myEventHandler = function () {
  console.log('I hear a scream!');
}
bus.on('scream', myEventHandler);
bus.emit('scream');