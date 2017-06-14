var Telegram = require('node-telegram-bot-api')
var settings = require('./settings.json')
var bot = new Telegram (settings.telegramToken, {polling: true})
var history = require('./browserHistory.json')['Browser History']

bot.on('message', function (msg) {
  console.log(msg)
  bot.sendMessage(msg.chat.id, "Hallo?")
})

var sendHistory = function () {
  var randomLink = history[Math.floor(history.length * Math.random())].url
  bot.sendMessage(settings.chatId, randomLink)
}

sendHistory()
setInterval(sendHistory, 1000 * 60 * 60)
