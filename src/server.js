const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); //Se setea donde esta la carpeta views
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middleware
app.use(express.urlencoded({extended: false}));


//Global Variables

//Routes
app.get('/', (req, res) => {
    res.render('index')
})

//Static Files - Son archivos que cualquier cliente puede ver.
app.use(express.static(path.join(__dirname, 'public'))); //Se setea donde esta la carpeta "public" con el método especifico express.static


module.exports = app; 

