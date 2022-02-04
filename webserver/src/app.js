const path = require('path')
const express = require('express')
const hbs = require('hbs');
const res = require('express/lib/response');
const { response } = require('express');
console.log(__dirname);
const app = express()
const forecast = require('./util/forcast.js')
const geocode = require('./util/geocode.js')
const port = process.env.PORT || 3000


console.log(path.join(__dirname,'../public'))
//To make express use the static page 
//dynamic engine .
const publicDirPath = path.join(__dirname,'../public')
const partialDirPath = path.join(__dirname,'./views/partials')

//
app.set('view engine','hbs')
//app.set('views',viewPath); 
app.use(express.static(publicDirPath))
hbs.registerPartials(partialDirPath)
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather ',
        name:'Eman'
    })
})
app.get('/help',(request,response)=>{
    response.render('help',{
        title:'Help ',
        name:'Eman '
    })
})
app.get('/about',(request,response)=>{
    response.render('about',{
        title:'About',
        name:'Eman '
    })
})
app.get('/weather',(request,response)=>{
    if(!request.query.address){
        return response.send(
            {
                error:'you must provide address !'
            }
        )}
        geocode(request.query.address, (error,{latitude,longitude,location}={})=>{
                if(error){
                    return response.send({error})
                }
                forecast(latitude,longitude , (error, forecastData) =>{
                    if(error){
                        return response.send({error})
                    }
                    response.send({
                        forecast:forecastData.long.current,
                        location,
                        address:request.query.address
                    })
                })
        })
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        errorMessage:'help articles not found ',
        name:'Eman'
    })
})
app.get('*',(req,res)=>{

    res.render('404',{
        title:'404',
        errorMessage:'Page not found',
        name:'Eman'
    })
})
 app.listen(port,()=>{
     console.log('Server is in port '+ port);
 })