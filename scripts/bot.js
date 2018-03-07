const bus = require('./eventBus')
const Telegraf = require('telegraf')
const axios = require('axios')

// BOT
// --------------------------
const bot = new Telegraf(process.env.KEY_TELEGRAM)

bot.on('text', (ctx) => getGiphy(ctx.message.text))
bot.startPolling()

// GIPHY
// --------------------------
let getGiphy = function (query) {
  axios.get('http://api.giphy.com/v1/gifs/search', {
    params: {
      q: query,
      api_key: process.env.KEY_GIPHY,
      limit: 1
    }
  })
    .then(function (r) {
      updateLiveUrl(r.data.data[0].images.original.url)
    })
    .catch(function (e) {
      console.log(e)
    });
}

let updateLiveUrl = function (data) {
  bus.emit('gifNext', data)
}