/**
 * Created by chenyufeng on 15/02/2017.
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

mongoose.model('User', UserSchema);