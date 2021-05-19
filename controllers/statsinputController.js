var Pitch = require('../models/pitch');
var PlayerStats = require('../models/playerstats');


// Render stats input page
exports.statsinput_index = function(req, res) {
    res.render('statsinput');
    //res.send("Stats input controller");
    //res.render('bootstrap');
};


//Post function for stats input form
exports.statsinput_create_post = function(req, res) {
     var season = req.body.season;
    var wins = req.body.wins;
    var losses = req.body.losses;
    var innings = req.body.innings;
    var runs = req.body.runs;
    var games = req.body.games;
    var games_started = req.body.games_started;
    var shutouts = req.body.shutouts;
    var saves = req.body.saves;
    var hits = req.body.hits;
    var earned_runs = req.body.earned_runs;
    var homeruns = req.body.homeruns;
    var walks = req.body.walks;
    var strikeouts = req.body.strikeouts;
    
    
    var stats = new PlayerStats(
      {  season: season,
     wins: req.body.wins,
     losses: req.body.losses,
     innings: req.body.innings,
     runs: req.body.runs,
     games: req.body.games,
     games_started: req.body.games_started,
     shutouts: req.body.shutouts,
     saves: req.body.saves,
     hits: req.body.hits,
     earned_runs: req.body.earned_runs,
     homeruns: req.body.homeruns,
     walks: req.body.walks,
     strikeouts: req.body.strikeouts,
     user:req.session.user,
      }
    );
    console.log(stats);
      stats.save(function (err) {
               if (err) { return next(err); }
               // state that the user has been sucessfully created
               
                //res.send("Success");
                res.redirect('/catalog/success');
                //res.render('postcreated');
             }); 
    
//    console.log(season);
//    console.log(wins);
//    console.log(losses);
//    console.log(innings);
//    console.log(runs);
//    console.log(games);
//    console.log(games_started);
//    console.log(shutouts);
//    console.log(saves);
//    console.log(hits);
//    console.log(earned_runs);
//    if(postcontent == null){
//        res.send("Empty post");
//    }
//    else{
//        //res.send(postcontent);
//        //Create a new post object 
//    var post = new Post(
//      { content: req.body.postcontent,
//        user:req.session.user,
//        type: 'regular',
//        //song: {path: trimmedPath}
//      }
//    );
//      post.save(function (err) {
//               if (err) { return next(err); }
//               // state that the user has been sucessfully created
//               
//                //res.send("Success");
//          res.render('postcreated');
//             }); 
//
//      console.log(post);
//    }    
};
