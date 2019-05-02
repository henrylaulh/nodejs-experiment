var request = require('request')

const weatherUrl = "https://api.darksky.net/forecast/741cf33a73bea55b038c2b62b9a4c520/37.8267,-122.4233"
const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoiaGVucnlsYXVsaCIsImEiOiJjanYzYWkwanAyZG5oNDRza3ZhaTc1cG11In0.foOyZHHYGdK1PCL9WMV2Gw"




// request({url: weatherUrl, json: true}, (error, response) => {

//     if(error){
//         console.log('Unable to connect to weather service!')
//     } else if(response.body.error){
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degrees out. There is " + response.body.currently.precipProbability + "% chance of rain.")
//     }
    
// })



// Geocoding
// Address -> Lat/Long -> Weather

// request({url: geocodeURL, json: true}, (error, response) => {

//     if(error){
//         console.log("Unable to connect to web services!")
//     } else if(response.body.features.length == 0) {
//         console.log("No matching result!")
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longtitude = response.body.features[0].center[0]
    
//         console.log(latitude, longtitude)
//     }
// })



const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGVucnlsYXVsaCIsImEiOiJjanYzYWkwanAyZG5oNDRza3ZhaTc1cG11In0.foOyZHHYGdK1PCL9WMV2Gw'

    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if(response.body.features.length == 0) {
            callback('No matching result! Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('Hong Kong', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})