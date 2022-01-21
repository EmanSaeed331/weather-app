const request = require('request')
const geocode = require('./utils/geocode')
const forCast = require('./utils/forcast')
const address = process.argv[4]
if (!address){
    console.log('Please provide address')
}
else{

    
geocode(address,(error, {latitude , longitude , location})=>{
    if(error){
      return console.log(error)
          }
      
          forCast(latitude,longitude , (error, forecastData)=>
          {   
          if(error){
              return console.log(error)
          }
          console.log(location)
          console.log(forecastData.long.current)
      
      
          })
      
  
   
  
  })
}






