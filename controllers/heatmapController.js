var Pitch = require('../models/pitch');


// Display detail page for a specific Author.
exports.heatmap_index = function(req, res) {
    //res.render('inputdata')
    res.render('bootstrap');
};



exports.heatmap_create_post = function(req, res) {
    var num = req.body.Test;
    console.log(num);
    console.log(typeof num);
    var obj = JSON.parse(num);
    console.log(typeof obj);
//    for (x in obj) {
//      console.log(obj[x]);
//    }
    
//    var pitch = new Pitch(
//      { username: req.body.username,
//        password: req.body.password,
//
//      }
//    );
//        
//      userinfo.save(function (err) {
//               if (err) { return next(err); }
//               // state that the user has been sucessfully created
//               
//                req.session.newuser = userinfo;
//                //res.redirect('/catalog/register/image');
//                res.send('Success');
//             });  
//        }
};
