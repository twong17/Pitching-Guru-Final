var Pitch = require('../models/pitch');
var PlayerStats = require('../models/playerstats');


// Display success page
exports.success_index = function(req, res) {
    res.render('success');
    //res.send("Stats input controller");
    //res.render('bootstrap');
};