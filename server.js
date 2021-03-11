const express = require('express')
const app= express()
const PORT= process.env.PORT || 3000
const ejs= require('ejs')
const path= require('path')
const expLayout= require('express-ejs-layouts')

app.get('/' ,(req, res)=>{
     res.render('home')
})
app.use(expLayout)

// app.set('views', path.join(__dirname,'/resources/views/'))

// app.set('views engine', ejs)
app.set('views', path.join(__dirname, '/resources/views/'));
app.set('view engine', 'ejs');

app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})