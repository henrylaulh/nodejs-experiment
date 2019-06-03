const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'henrylau9677@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'henrylau9677@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Dear ${name}, sorry to see you go. Please let us know anything to improve.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}