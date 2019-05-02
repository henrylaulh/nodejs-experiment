const https = require('https')

const url = 'https://api.darksky.net/forecast/741cf33a73bea55b038c2b62b9a4c520/40a,-75'

const request = https.request(url, (response) => {

    let data = ''   //let not const, as need to be reasigned.

    response.on('data', (chunk) => {
        // Run multiple time
        // Once for each chunk
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log("An error", error)
})

request.end()   // Send it