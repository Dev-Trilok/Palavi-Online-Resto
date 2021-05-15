const express = require('express')
const app= express()
const PORT= process.env.PORT || 3000
const ejs= require('ejs')
const path= require('path')
const expLayout= require('express-ejs-layouts')
const mongoose= require('mongoose')

//assets
app.use(express.static('public'))  
app.use(expLayout) 

//set template engine
app.set('views', path.join(__dirname, '/resources/views/'));

app.set('view engine', 'ejs');

require('./routes/web')(app)



app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})


// yarn run dev