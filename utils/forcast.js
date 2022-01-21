const request = require('request')
const forCast = (latitude , longitude , callback)=>{
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon='+ longitude +'&appid=641cff8180ebf3531829ad2be14e0938'
    const uu = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon='+ longitude +'&exclude=daily&appid=641cff8180ebf3531829ad2be14e0938'

    request({url:uu,json:true},(error, response)=>{
        if (error){
            callback('Unable to connect to location services!', undefined)

        }
        else if (response.body.length === 0 & response.body.length === 0  ){
            callback('Unable to find lat and long. Try another search.', undefined)}

        else{
            callback(undefined , {
                lat:response.body.lat, 
                long:response.body
            
                }
                
            )
        }

    }) 
}
module.exports = forCast



