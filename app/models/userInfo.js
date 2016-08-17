/**
 * Created by arme on 11/8/2559.
 */
var mongoose = require('mongoose');

// define the schema for our user model
var userInfoSchema = mongoose.Schema({
    userId: String,
    name: String,
    lastName: String,
    role: String
});

// create the model for users info and expose it to our app
module.exports = mongoose.model('UserInfo', userInfoSchema);