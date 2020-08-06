const express = require('express');
const exphbs = require('express-handlebars')
const path = require('path');
const morgan = require('morgan')

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
app.use(morgan('dev'));


//Global Variables

//Routes
app.use(require('./routes/index.routes')); //Va a buscar las rutas en estos archivos
app.use(require('./routes/notes.routes'))

//Static Files - Son archivos que cualquier cliente puede ver.
app.use(express.static(path.join(__dirname, 'public'))); //Se setea donde esta la carpeta "public" con el método especifico express.static


module.exports = app; 

