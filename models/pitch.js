var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PitchSchema = new Schema(
  {
    pitch_type: {type: String, required: true},
    pitch_velocity:{type: Number, required: true},
    xCoordinate: {type:Number, required: true},
    yCoordinate: {type: Number, required: true},
    date: {type: Date, required: true},
    year: {type: Number, required: true},
    month: {type: Number, required: true},
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

PitchSchema.set('toJSON', { virtuals: true })
//// Virtual for user login
//UserInfoSchema
//.virtual('url')
//.get(function () {
//  return '/catalog/login/' + this._id;
//});

// Virtual for user's full name
//UserInfoSchema
//.virtual('name')
//.get(function () {
//  return this.firstname + ' ' + this.lastname;
//});



//const UserInfo = mongoose.model('UserInfo', UserInfoSchema, 'userinfos');
//Export model
module.exports = mongoose.model('Pitch', PitchSchema);
