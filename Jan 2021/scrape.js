const axios = require ('axios');
const cheerio = require ('cheerio');

let desc = ''

SCPscrape = function SCPscrape (URL) {
    fURL = `http://www.scpwiki.com/scp-${RandomSCP}`
    //formatted
    axios.get(fURL)
    .then (async function (response) {
        const $ = cheerio.load(response.data)


        content = $('p')
        fcontent = content.text()

        s = fcontent.indexOf("Description")
        fcontent = fcontent.slice(`${s}`)
        // removes everything before description
        f = fcontent.indexOf(".")
        // grabs the end of the first sentence after description

        if (200 > f) { 
            f = fcontent.indexOf(".", f + 1)
            // if the first period yields less than 200 characters, slice second sentence as well.

            desc = fcontent.slice(0,`${f}`)
            // Guarantees more than 200 letter response.
            console.log(desc)
            return desc
        } else {
            desc = fcontent.slice(0,`${f}`)
            // if there's more than 200 letters in first sentence, uses it.
            console.log(desc)
            return desc
        }
    })
}
module.exports = SCPscrape