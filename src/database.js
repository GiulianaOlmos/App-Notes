//Archivo que mantiene la conexion
const moongose = require('mongoose');


const {NOTES_APP_MONGODB_HOST,NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`

moongose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));