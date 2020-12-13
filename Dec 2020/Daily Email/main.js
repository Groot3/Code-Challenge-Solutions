//12/12/2020
//Automate an Email to be sent to myself every day.
//Hey idiot, dont upload your password to github

const nodemailer = require ('nodemailer');
const keys = require ('./config.json')
const date = new Date()
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0; // fix for self signed certificate

async function main() {
    let transporter = nodemailer.createTransport({
        host: `${keys.host}`, // Make sure to set up these in the config file.
        port: `${keys.port}`, // Refer to your email provider for your mail provider's configuration.
        secure: false,
        auth: {
          user: `${keys.user}`,
          pass: `${keys.password}`,
        },
    });

    let subject = date.getMonth + " " + date.getDate

    let info = await transporter.sendMail({
        from: `${keys.from}`,
        to: `${keys.to}`,
        subject: subject,
        text: "Hello, Email World.",
        html: undefined, // none, we are using text
    });

    console.log("Message Sent: %s", info.subject);
}

main().catch(console.error)

