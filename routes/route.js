var express = require('express');
var router = express.Router();
var tempe = require('../weather.js');
//var alert = require('alert-node');


router.get('/', function (req, res) {
    res.sendFile(__dirname.slice(0, 18) + '/index.html');//slice depend du chemin, à adapter
});

router.post('/', function (req, res) {
    ville = req.body.ville;
    tempe.meteo(ville);
    res.redirect('/');
});



module.exports = router;
