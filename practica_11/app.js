var express = require('express'); // Importación del paquete.
var app = express(); // se crea una aplicación Express.

var port = process.env.PORT || 3000; // El servidor escucha peticiones por este puerto (3000).
app.use('/assets', express.static(__dirname + '/public')); // El contenido virtual para el contenido estático es /assets. El nombre será mapeado a la carpeta física /public, pero disfrazada de /assets
app.use('/', function (req, res, next){
    console.log('Request Url:' + req.url); // Se imprime en la treminal la dirección a la que se accede.
    next(); // Pasa a la siguiente función
});

app.get('/', function (req, res){
    res.send(`<html><head><link href=assets/style.css type=text/css rel=stylesheet></head><body><h1>Hello world!</h1></body></html>`); // Se modificó para que tomara los estilos del archivo css.
});

app.get('/api', function (req, res){
    res.json({firstname: 'Tirzo', lastname: 'Tejeda'}); // En localhost:3000/api regresará el objeto json.
});

app.get('/person/:id', function (req, res){ 
    res.send(`<html><head></head><body><h1>Persona: ${req.params.id}</h1></body></html>`);
});     // localhost:3000/person/Tirzo => devuelve un h1 con "Persona: Tirzo".

app.listen(port);