const express = require('express');
const path = require('path');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); //Se setea donde esta la carpeta views

//Middleware
app.use(express.urlencoded({extended: false}));


//Global Variables

//Routes
app.get('/', (req, res) => {
    res.send("Hello World")
})

//Static Files - Son archivos que cualquier cliente puede ver.
app.use(express.static(path.join(__dirname, 'public'))); //Se setea donde esta la carpeta "public" con el método especifico express.static


module.exports = app; 

