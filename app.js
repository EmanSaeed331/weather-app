const request = require('request')
const geocode = require('./utils/geocode')



geocode('Boston',(error, data)=>{
    console.log(data)


})


