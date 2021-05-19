var Pitch = require('../models/pitch');


//Render data input page
exports.datainput_index = function(req, res) {
    res.render('inputdata2');
    //res.render('bootstrap');
};


//post function to send pitches to the database
exports.datainput_create_post = function(req, res) {
    var num = req.body.Test;
    console.log(num);
    console.log(typeof num);
    var obj = JSON.parse(num);
    console.log(typeof obj);
    console.log(obj);
    for (x in obj) {
      console.log(obj[x][0]);
    }
    //res.send(num);
    
    for (x in obj) {
        var pitch = new Pitch(
          { xCoordinate: obj[x][0],
            yCoordinate: obj[x][1],
            pitch_type: obj[x][2],
            pitch_velocity: obj[x][3],
            date: obj[x][4],
            year: obj[x][5],
            month: obj[x][6],
            user: req.session.user
          }
        );
        
      pitch.save(function (err) {
               if (err) { return next(err); }
               // state that the user has been sucessfully created
               
                //req.session.newuser = userinfo;
                //res.render('success');
                
             });  
        
    }
};
