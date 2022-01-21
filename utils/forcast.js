const request = require('request')
const forCast = (lat , lon , callback)=>{
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon='+lon+'&appid=641cff8180ebf3531829ad2be14e0938'

    request({url:url,json:true},(error, response)=>{
        if (error){
            callback('Unable to connect to location services!', undefined)

        }
        else if (response.body.length === 0 & response.body.length === 0  ){
            callback('Unable to find lat and long. Try another search.', undefined)}

        else{
            callback(undefined , {
                lat:response.body, 
                long:response.body
            
                }
                
            )
        }

    }) 
}
forCast(39,129 , (error,response) => {
    console.log(response)
    console.log(error)

})



