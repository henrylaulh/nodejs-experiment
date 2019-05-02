
const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))


// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Henry'
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        image: './img/640x480.png',
        name: 'Henry'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et.',
        name: 'Henry'
    })
})





app.get('/weather', (req, res) => {
    res.send({
        forecast:'Sunny day',
        location:'Hong Kong'
    })
})



// Starting server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})