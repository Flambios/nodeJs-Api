var http = require('http');
var print = require('./printer.js');

function meteo(city) {
    var request = http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8c0cc6039b87b57592dbdedc77e9d4ea", function (responce) {
        var body = "";

        responce.on('data', function (chunk) {
            body += chunk;
        });

        responce.on('end', function () {

            if (responce.statusCode === 200) {
                try {
                    var data_weather = JSON.parse(body);
                    print.M(city, data_weather.main.temp);
                } catch (error) {
                    print.E(error.message);
                }
            } else {
                print.E({message: "Impossible de recupere les informations"});
            }
        });
    });
    request.on('error', print.E);
}  
module.exports.meteo = meteo;