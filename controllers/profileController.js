var Pitch = require('../models/pitch');
var PlayerStats = require('../models/playerstats');
var async = require('async');

// Render profile page
exports.profile_index = async function(req, res) {
    var fastballArray = [];
    var curveballArray = [];
    var changeupArray = [];
    //res.render('profile');
    //res.render('bootstrap');
    //Pitch.find({user: {"$in": req.session.user.friends}})
    //console.log("FROM THE PROF" + req.session.user.name);
    //Pitch.find()
    
//    Pitch.find({user: req.session.user})
//    .exec(function (err, list_pitches) {
//      if (err) { return next(err); }
//      //Successful, so render
//        console.log("FIND FUNCTION WORKED");
//        //console.log(list_pitches);
//        list_pitches.forEach(function(entry){ 
//            if(entry.pitch_type == "Fastball")
//                fastballArray.push(entry);
//            else if(entry.pitch_type == "Curveball")
//                curveballArray.push(entry);
//        });
//        res.render('profile', { title: 'Pitching Guru Profile Page', fastball_list: fastballArray, curveball_list: curveballArray, name: req.session.user.name});
//    });
    //var stats_array;
//      await PlayerStats.find(function(err,stat){
//          stats_array=stat;
//          console.log("We found " + stats_array);
//        });
    
    //query database for all stats information for logged in user
    try {
        var stats_array = await PlayerStats.find({user: req.session.user}).sort({season: 'ascending'});
        console.log("We found " + stats_array);
    } catch (error) {
        handleError(res, error.message);
    }
    
    //Find all pitches logged by the user and push into separate arrays by pitch type
    Pitch.find({user: req.session.user})
    .sort({date: 'ascending'})
    .exec(function (err, list_pitches) {
      if (err) { return next(err); }
      //Successful, so render
        console.log("FIND FUNCTION WORKED");
        //console.log(list_pitches);
        list_pitches.forEach(function(entry){ 
            if(entry.pitch_type == "Fastball")
                fastballArray.push(entry);
            else if(entry.pitch_type == "Curveball")
                curveballArray.push(entry);
            else if(entry.pitch_type == "Changeup")
                changeupArray.push(entry);
        });
        //take monthly and yearly averages for each pitch type
        if(fastballArray.length > 0){
            var fastballAv = yearAverages(fastballArray);
            var fastballMonthAv = monthAverages(fastballArray);}
        else
            var fastballAv = [];
        if(curveballArray.length > 0){
            var curveballAv = yearAverages(curveballArray);
            var curveballMonthAv = monthAverages(curveballArray);}
        else
            var curveballAv = [];
        if(changeupArray.length > 0){
            var changeupAv = yearAverages(curveballArray);
            var changeupMonthAv = monthAverages(changeupArray);}
        else
            var curveballAv = [];
        var lastFiveSeasons = fillSeasonArray(stats_array);
        console.log(list_pitches);
        res.render('profile', { title: 'Pitching Guru Profile Page', fastball_list: fastballArray, fastball_av: fastballAv, fastballMonths: fastballMonthAv, curveball_av: curveballAv, curveball_list: curveballArray, curveMonths: curveballMonthAv, stats_list: stats_array, changeup_list: changeupArray, changeMonths: changeupMonthAv,lastFive: lastFiveSeasons, name: req.session.user.name, path: req.session.user.img.path,user:req.session.user});
    });
    
    
};


function fillSeasonArray(array){
    var arr = [null,null,null,null,null,null,null];
    for(i = 0; i < array.length; i++)
    {
            if(array[i].season == 2015){
                arr[0] = array[i]}
            if(array[i].season == 2016){
                arr[1] = array[i]}
            if(array[i].season == 2017){
                arr[2] = array[i]}
            if(array[i].season == 2018){
                arr[3] = array[i]}
            if(array[i].season == 2019){
                arr[4] = array[i]}
            if(array[i].season == 2020){
                arr[5] = array[i]}
            if(array[i].season == 2021){
                arr[6] = array[i]}
    }
    return arr;
}


function yearAverages(array){
    //console.log(typeof(array[0].pitch_velocity));
    var veloSums = [0.0,0.0,0.0,0.0,0.0,0.0,0.0];
    var count = [0,0,0,0,0,0,0];
    for(i = 0; i < array.length; i++)
    {
        if(array[i].year != null)
        {
            if(array[i].year == 2015){
                veloSums[0] += array[i].pitch_velocity;
                count[0] = count[0]+1;}
            if(array[i].year == 2016){
                veloSums[1] += array[i].pitch_velocity;
                count[1]= count[1]+1;}
            if(array[i].year == 2017){
                veloSums[2] += array[i].pitch_velocity;
                count[2]= count[2]+1;}
            if(array[i].year == 2018){
                veloSums[3] += array[i].pitch_velocity;
                count[3]= count[3]+1;}
            if(array[i].year == 2019){
                veloSums[4] += array[i].pitch_velocity;
                count[4]= count[4]+1;}
            if(array[i].year == 2020){
                veloSums[5] += array[i].pitch_velocity;
                count[5]= count[5]+1;}
            if(array[i].year == 2021){
                veloSums[6] += array[i].pitch_velocity;
                count[6]= count[6]+1;}
        }
    }
    //console.log("VeloSums" + veloSums);
    //console.log("Count" + count);
    for(i = 0; i < veloSums.length; i++)
    {
        if(count[i] != 0)
            veloSums[i] = veloSums[i]/count[i];
        else
            veloSums[i] = -1
    }
            
    return veloSums; 
    
}

function monthAverages(array){
    //console.log(typeof(array[0].pitch_velocity));
    var veloSums = [0.0,0.0,0.0,0.0,0.0,0.0,0.0];
    var count = [0,0,0,0,0,0,0];
    for(i = 0; i < array.length; i++)
    {
        if(array[i].month != null)
        {
            if(array[i].month == 9){
                veloSums[0] += array[i].pitch_velocity;
                count[0] = count[0]+1;}
            if(array[i].month == 10){
                veloSums[1] += array[i].pitch_velocity;
                count[1]= count[1]+1;}
            if(array[i].month == 11){
                veloSums[2] += array[i].pitch_velocity;
                count[2]= count[2]+1;}
            if(array[i].month == 0){
                veloSums[3] += array[i].pitch_velocity;
                count[3]= count[3]+1;}
            if(array[i].month == 1){
                veloSums[4] += array[i].pitch_velocity;
                count[4]= count[4]+1;}
            if(array[i].month == 2){
                veloSums[5] += array[i].pitch_velocity;
                count[5]= count[5]+1;}
            if(array[i].month == 3){
                veloSums[6] += array[i].pitch_velocity;
                count[6]= count[6]+1;}
        }
    }

    for(i = 0; i < veloSums.length; i++)
    {
        if(count[i] != 0)
            veloSums[i] = veloSums[i]/count[i];
        else
            veloSums[i] = null;
    }
            
    return veloSums; 
    
}


