const express = require('express')

const app = express()


// Routes
app.get('', (req, res) => {
    res.send('Hello express!')
})

app.get('/help', (req, res) => {
    res.send('Help page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/weather', (req, res) => {
    res.send('View weather')
})



// Starting server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})