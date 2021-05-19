var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserInfoSchema = new Schema(
  {
    username: {type: String, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    team: {type: String, required: true},
    position: {type: String, required: true},
    handedness: {type: String, required: true},
    height: {type: String, required: true},
    weight: {type: String, required: true},
    img: 
    { 
        //data: Buffer, 
        contentType: String,
        path: String
    } 
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

UserInfoSchema.set('toJSON', { virtuals: true })
//// Virtual for user login
//UserInfoSchema
//.virtual('url')
//.get(function () {
//  return '/catalog/login/' + this._id;
//});

// Virtual for user's full name



//const UserInfo = mongoose.model('UserInfo', UserInfoSchema, 'userinfos');
//Export model
module.exports = mongoose.model('UserInfo', UserInfoSchema);
