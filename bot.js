const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.token;
bot.on('ready', function () {
    bot.user.setActivity('darknet').catch(console.error)
    })
    
    bot.login('token')
