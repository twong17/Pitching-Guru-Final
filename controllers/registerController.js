const { body,validationResult } = require("express-validator");
var UserInfo = require('../models/userinfo');


// Render register page
exports.register = function(req, res) {
    res.render('register', { title: 'PitchingGuru Register Page'});
};

// Render register page
exports.register_create_get = function(req, res) {
    res.render('register', { title: 'PitchingGuru Register Page'});
};

// Create new user 
exports.register_create_post =  [
   
//  // Validate and santise the name field.
  body('username', 'Username required').trim().isLength({ min: 1 }).escape(),
  body('password', 'Password required').trim().isLength({ min: 1 }).escape(),
  body('name', 'Name required').trim().isLength({ min: 1 }).escape(),
    body('team', 'Team required').trim().isLength({ min: 1 }).escape(),
    body('position', 'Position required').trim().isLength({ min: 1 }).escape(),
    body('handedness', 'Handedness required').trim().isLength({ min: 1 }).escape(),
    body('height', 'Height required').trim().isLength({ min: 1 }).escape(),
    body('weight', 'Weight required').trim().isLength({ min: 1 }).escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {

//    // Extract the validation errors from a request.
      console.log(validationResult(req));
    const errors = validationResult(req);


    if (!errors.isEmpty()) {
      // There are errors. Render the form again with sanitized values/error messages.
//      res.render('register', { title: 'Trove Registration Page', userinfo: userinfo, errors: errors.array()});
        res.send("There was an error");
      return;
    }
    else {
        
       //Create a new user object with escaped and trimmed data.
    var userinfo = new UserInfo(
      { username: req.body.username,
        password: req.body.password,
//        email: req.body.email,
        name: req.body.name,
        team: req.body.team,
        position: req.body.position,
        handedness: req.body.handedness,
        height: req.body.height,
        weight: req.body.weight,
//        location: req.body.location,
//        lastname: req.body.lastname
      }
    );
        
      userinfo.save(function (err) {
               if (err) { return next(err); }
               // state that the user has been sucessfully created
               
                req.session.newuser = userinfo;
                //res.redirect('/catalog/register/image');
                //res.send('Success');
                res.redirect('/catalog/register/image');
             });  
        }
  }
];
