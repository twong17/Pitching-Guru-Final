var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PlayerStatsSchema = new Schema(
  {
    season: {type: Number, required: true},
    wins: {type: Number, required: false},
    losses: {type: Number, required: false},
    innings: {type: Number, required: false},
    runs: {type: Number, required: false},
    games: {type: Number, required: false},
    games_started: {type: Number, required: false},
    shutouts: {type: Number, required: false},
    saves: {type: Number, required: false},
    hits: {type: Number, required: false},
    earned_runs: {type: Number, required: false},
    strikeouts: {type: Number, required: false},
    walks: {type: Number, required: false},
    homeruns: {type: Number, required: false},
    user: {type: Schema.Types.ObjectId, ref: 'UserInfo'},
//    firstname: {type: String, required: false},
//    lastname: {type: String, required: false},
//    email: {type: String, required: false},
//    location: {type: String, required: false},
//    friends: [{type: Schema.Types.ObjectId, ref: 'UserInfo'}],
//    img: 
//    { 
//        //data: Buffer, 
//        contentType: String,
//        path: String
//    } 
  }
);

PlayerStatsSchema.set('toJSON', { virtuals: true })

PlayerStatsSchema
.virtual('win_loss_pct')
.get(function () {
    
   //return (Math.round(this.wins/(this.wins+this.losses)) * 100).toFixed(2);
    return (this.wins/(this.wins+this.losses) * 100).toFixed(2);
  //return '/catalog/login/' + this._id;
});

PlayerStatsSchema
.virtual('strikeouts_per_nine')
.get(function () {
    
   //return (Math.round(this.wins/(this.wins+this.losses)) * 100).toFixed(2);
    return (9*(this.strikeouts/this.innings)).toFixed(2);
  //return '/catalog/login/' + this._id;
});

PlayerStatsSchema
.virtual('homeruns_per_nine')
.get(function () {
    
   //return (Math.round(this.wins/(this.wins+this.losses)) * 100).toFixed(2);
    return (9*(this.homeruns/this.innings)).toFixed(2);
  //return '/catalog/login/' + this._id;
});

PlayerStatsSchema
.virtual('walks_per_nine')
.get(function () {
    
   //return (Math.round(this.wins/(this.wins+this.losses)) * 100).toFixed(2);
    return (9*(this.walks/this.innings)).toFixed(2);
  //return '/catalog/login/' + this._id;
});

PlayerStatsSchema
.virtual('era')
.get(function () {
    
   //return (Math.round(this.wins/(this.wins+this.losses)) * 100).toFixed(2);
    return (9*(this.runs/this.innings)).toFixed(2);
  //return '/catalog/login/' + this._id;
});



//const UserInfo = mongoose.model('UserInfo', UserInfoSchema, 'userinfos');
//Export model
module.exports = mongoose.model('PlayerStats', PlayerStatsSchema);
