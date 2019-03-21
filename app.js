var tempe = require('./weather.js');
var app = express();
var cities = process.argv.slice(2);

cities.forEach(function(city) {
    tempe.meteo(city);
})

app.get('/', function(req, resp){
    
})

app.listen(8080);