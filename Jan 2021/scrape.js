const axios = require ('axios');
const cheerio = require ('cheerio');

SCPscrape = function SCPscrape (URL) {
axios.get(URL)
    .then (function (response) {
        const $ = cheerio.load(response.data)


        let content = $('p')
        let fcontent = content.text()
        s = fcontent.indexOf("Description")
        fcontent = fcontent.slice(`${s}`)
        f = fcontent.indexOf(".")

        if (200 > f) { 
            f = fcontent.indexOf(".", f + 1)
            fcontent = fcontent.slice(0,`${f}`)
            console.log("Reached1")
            // Guarantees more than 200 letter response.
            return fcontent
        } else {
            fcontent = fcontent.slice(0,`${f}`)
            console.log("Reached2")
            return fcontent
        }
    })
    
}
module.exports = SCPscrape