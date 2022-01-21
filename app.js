const request = require('request')
const geocode = require('./utils/geocode')
const forCast = require('./utils/forcast')
const address = process.argv[2]
if (!address){
    console.log('Please provide address')
}
else{

    
geocode(address,(error, data)=>{
    if(error){
      return console.log(error)
          }
      
          forCast(data.latitude,data.longitude , (error, forecastData)=>
          {   
          if(error){
              return console.log(error)
          }
          console.log(data.location)
          console.log(forecastData.long.current)
      
      
          })
      
  
   
  
  })
}





