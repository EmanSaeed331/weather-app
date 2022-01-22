const path = require('path')
const express = require('express')
const hbs = require('hbs');
const res = require('express/lib/response');
console.log(__dirname);
const app = express()
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
        title: 'Weather app ',
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
    response.send({
        forecast:'it is snowing ',
        location:'Egypt'
    })

})
 app.listen(3000,(error,success)=>{
     console.log('Server is in port 3000');
 })