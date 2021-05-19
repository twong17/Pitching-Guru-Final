//const { body,validationResult } = require("express-validator");
const multer = require('multer');
const helpers2 = require('../helpers2');
var UserInfo = require('../models/userinfo');
const path = require('path');
const fs = require('fs');


//define storage location for images
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        cb(null, file.fieldname + '-' + Date.now());
    }
});

// Display registerimage page
exports.registerimage = function(req, res) {
    res.render('registerimage', { title: 'PitchingGuru Profile Picture Upload Page'});
    console.log(req.session.newuser);
};

// Display registerimage page.
exports.registerimage_create_get = function(req, res) {
    //res.render('index', { title: 'Trove Login Page'});
    res.send("Register Image GET");
};

// Handle register image on POST
exports.registerimage_create_post = function(req, res) {
    //res.send("Register Image POST");
    // 'profile_pic' is the name of our file input field in the HTML form
    let upload = multer({ storage: storage, fileFilter: helpers2.imageFilter }).single('profile_pic');

    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        // Display uploaded image for user validation
        var trimmedPath = req.file.path.slice(6);
        var filePath = req.file.path;
        console.log("The path is: " + trimmedPath);
        var newUser = req.session.newuser;
        console.log(newUser);
//        newUser.img.data = fs.readFileSync(filePath);
//        newUser.img.contentType = "image/png";
        UserInfo.findOneAndUpdate({ _id: req.session.newuser._id }, {img: { 
            //data: fs.readFileSync(path.join('/uploads/' + req.file.filename)), 
            contentType: 'image/png',
            path: trimmedPath
        } },function(err, response) {
         if (err) {
         callback(err);
        } else {
            //res.send("Account created");
            res.render('registermessage');
        }
        });
    });
};
