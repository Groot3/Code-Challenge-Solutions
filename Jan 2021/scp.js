// Project to print a random SCP to a discord server.
// Very close to being functional, my first real implementation of
// discord.js

// Groot
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
        if (message.content.includes(command) || message.content != (command)) {

            // Splices string after the !scp command
            // TODO: Sanitize input
            // TODO: Verify SCP "exists"
            RequestedSCP = message.content
            // TODO: change 4 to command.length
            RequestedSCP.slice(-1,4)
            if (isNumeric(RequestedSCP) == true) {
                console.log("Test 2")
                message.channel.send(`http://www.scpwiki.com/scp-${RequestedSCP}`)

            }
            
        }
        if (message.content === (command)) {
            message.channel.send(`http://www.scpwiki.com/scp-${RandomSCP}`)
        }
    }
    return
})


client.login(`${keys.BOT_TOKEN}`)