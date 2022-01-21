const request = require('request')
const geocode = require('./utils/geocode')
const forCast = require('./utils/forcast')



geocode('Egypt',(error, data)=>{
   // console.log(data)
    console.log(error)


    forCast(data.latitude,data.longitude , (error, response)=>
{   
    console.log(error)
    console.log(response)


})

})



