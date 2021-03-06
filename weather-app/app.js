const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const weatherUrl = 'https://api.darksky.net/forecast/741cf33a73bea55b038c2b62b9a4c520/37.8267,-122.4233'
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGVucnlsYXVsaCIsImEiOiJjanYzYWkwanAyZG5oNDRza3ZhaTc1cG11In0.foOyZHHYGdK1PCL9WMV2Gw'

const address = process.argv[2]

if(!address){
    console.log("Please provide an address.")
} else {
    geocode(address, (error, { latitude, longitude, location }) => {

        if(error){
            return console.log(error)
        }
    
        // Callback Chaining
        forecast(latitude, longitude, (error, forecastData) => {
    
            if(error){
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastData)
    
        })
    
    })
    
}