var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var router = require('./routes/route');

app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));

app.use('/', router);

app.listen(8080, function(){
    console.log('listening on : 8080');
});