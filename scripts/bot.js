const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.KEY_TELEGRAM)
bot.start((ctx) => {
  console.log('started:', ctx.from.id)
  return ctx.reply('Welcome!')
})
bot.command('help', (ctx) => ctx.reply('Try send a sticker!'))
bot.hears('hi', (ctx) => ctx.reply('Hey there!'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.startPolling()