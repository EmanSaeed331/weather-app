const express = require('express')
const app =express()
app.get('/',(request,response)=>{
    response.send('Hello Express !')

})
app.get('/help',(request,response)=>{
    response.send('Help Page !')

})
app.get('/about',(request,response)=>{
    response.send('About Page !')

})
app.get('/weather',(request,response)=>{
    response.send('Weather Page !')

})
 app.listen(3000,(error,success)=>{
     console.log('Server is in port 3000');
 })