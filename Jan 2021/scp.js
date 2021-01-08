//Groot
//1/6/2021

const keys = require('./config.json')

const discord = require('discord.js')
const client = new discord.Client()

const commands = ["!scp"]

client.once('ready', () => {
    console.log("Ready.")
})
client.on('message', message => {

    // numeric function from StackOverflow to verify input
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    generateRandom = function(toNum) {
        generateRandom = Math.floor(Math.random() * toNum) + 1;
        return generateRandom
    };

    RandomSCP = generateRandom(4999)
    if (message.author.bot == true) {
        return
    }

    for (command of commands) {
        if (message.content.includes(command) && message.content != (command)) {
            RequestedSCP = message.content
            RequestedSCP = RequestedSCP.replace(`${command}`, "").replace(" ","") 
            // formats spaces and command out of string

            if (isNumeric(RequestedSCP) == true) {
                // Checks to see if the formatted string is a number
                if (RequestedSCP < 5000) {
                    message.channel.send(`http://www.scpwiki.com/scp-${RequestedSCP}`)
                } else 
                {
                    message.channel.send(`Error: try a SCP within range 1-4999 instead.`)
                }
            } else {
                message.channel.send(`Error: Command not recognized. Try entering a number.`)
            }
            
        }
        if (message.content === (command)) {
            message.channel.send(`http://www.scpwiki.com/scp-${RandomSCP}`)
        }
    }
    return
})


client.login(`${keys.BOT_TOKEN}`)