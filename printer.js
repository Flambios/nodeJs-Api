var alert = require('alert-node');

function printMessage(city, temperature){
    alert("Il fait " + (temperature-273.15).toFixed(2) + "°C, a " + city);
}

function printError(error){
    alert(error.message);
}

module.exports.M = printMessage;
module.exports.E = printError;
