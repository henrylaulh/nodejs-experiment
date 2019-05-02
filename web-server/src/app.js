
const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


// Setup handlebars engin and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))



// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Henry Lau'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        image: './img/640x480.png',
        name: 'Henry Lau'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et.',
        name: 'Henry Lau'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast:'Sunny day',
        location:'Hong Kong'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404',{
        title:'404',
        errorMessage:'Help article not found.',
        name:'Henry Lau'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title:'404',
        errorMessage:'Page not found.',
        name:'Henry Lau'
    })
})


// Starting server
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})