const discord = require('discord.js')
const bot = new discord.Client()

bot.on('ready', () => {
    console.log("^_^")
    let i = 0;
    function activity() {
        i++
        switch (i) {
            case 1:
                bot.user.setActivity('Critique son créateur')
                break;
            case 2:
                bot.user.setActivity('Prépare la révolution des Machines')
                break
            case 3:
                bot.user.setActivity("!help pour de l'aide !")
                break
            default:
                i = 0
                break;
        }
    }
    bot.setInterval(activity,12000) 
})

bot.on('message', (message) => {
    if (/^!/.test(message.content)) {

        let listCommand = [{
            name: /help/,
            action () {
                message.reply("Version : 1.0.0\nla liste des fonctionnalités :\n!random pour avoir un nombre aléatoire")
            }
        },{
            name: /random/,
            action () {
                message.channel.send(Math.round(Math.random() * 100))
            }
        }]

        listCommand.forEach( (i) => {
            if (i.name.test(message.content)) {
                i.action()
            }
        })
    }
})

bot.login('TOKEN')