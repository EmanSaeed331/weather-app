const path = require('path')
const express = require('express')
console.log(__dirname);
console.log(path.join(__dirname,'../public'))
const app =express()
//To make express use the static page 
const publicDirPath = path.join(__dirname,'../public')
app.use(express.static(publicDirPath))


app.get('/',(request,response)=>{
    response.send('<h1>Weather</h1>')

})
app.get('/help',(request,response)=>{
    response.send('Help Page !')

})
app.get('/about',(request,response)=>{
    response.send('<h1>About Page !</h1>')

})
app.get('/weather',(request,response)=>{
    response.send({
        forecast:'it is snowing ',
        location:'Egypt'
    })

})
 app.listen(3000,(error,success)=>{
     console.log('Server is in port 3000');
 })