const request = require('request')

    const geocode = (address, callback) => {
        const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZW1hbnNhZWVkIiwiYSI6ImNrOHdocGQ3aDBhZ2YzZ3FvcGI0NDFvYnAifQ.ROE1m_2YJJtiHmcMq4QO7A'    
        request({ url: url, json: true }, (error, response) => {
            if (error) {
                console.log('error1')
                callback('Unable to connect to location services!', undefined)
            } else if (response.body.features.length === 0) {
                console.log('error2')
                callback('Unable to find location. Try another search.', undefined)
            } else {
                console.log('dddddddd')
                callback(undefined, {
                    latitude: response.body.features[0].center[0],
                    longitude: response.body.features[0].center[1],
                    location: response.body.features[0].place_name
                })
            }
        })  
    }
  
module.exports = geocode

