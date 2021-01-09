//Groot
//1/6/2021

const keys = require('./config.json')
const discord = require('discord.js')
const client = new discord.Client()
const cmds = ["!scp"]
const SCPscrape = require('./scrape.js')


client.once('ready', () => {
    console.log("Ready.")
})

try {
    client.on('message', msg => {

        // numeric function from StackOverflow to verify input
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    
        generateRandom = function(toNum) {
            generateRandom = Math.floor(Math.random() * toNum) + 1;
            return generateRandom
        };

        RandomSCP = generateRandom(4999)
        if (msg.author.bot == true) {
            return
        }
    
        for (cmd of cmds) {
            if (msg.content.includes(cmd) && msg.content != (cmd)) {
                ReqSCP = msg.content
                ReqSCP = ReqSCP.replace(`${cmd}`, "").replace(" ","") 
                // formats spaces and the given command out of string
    
                if (isNumeric(ReqSCP) == true) {
                    // Checks to see if the formatted string is a number
                    if (ReqSCP < 5000) {
                        if (ReqSCP < 100) {
                            msg.channel.send(`http://www.scpwiki.com/scp-0${ReqSCP}`) 
                            // fix for:SCP links must be formatted ending in -XXX, not -XX.

                        } else {
                            msg.channel.send(`http://www.scpwiki.com/scp-${ReqSCP}`)
                        }
                    } else 
                    {
                        msg.channel.send(`Error: try a SCP within range 1-4999 instead.`)
                    }
                } else {
                    msg.channel.send(`Error: Command not recognized. Try entering a number.`)
                    // if ReqSCP is not numeric.
                }
                
            }

            let desc = ''
            if (msg.content === (cmd)) { // if no condition is given:
                async function getdescription() {
                    await SCPscrape(`http://www.scpwiki.com/scp-${RandomSCP}`)
                }
                
                msg.channel.send(`http://www.scpwiki.com/scp-${RandomSCP}` + "\n" + getdescription())
            }
        }
    })
} catch (error) {
    console.error(error)
}
//Makes sure bot doesnt die on one error

client.login(`${keys.BOT_TOKEN}`)