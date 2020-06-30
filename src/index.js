require('dotenv').config(); //Si existe un archivo llamdo .env va leer lo que tiene dentro y lo asigna en las variables de entorno. 

const app = require('./server');
require('./database');


app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'))
})