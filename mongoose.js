/**
 * Created by chenyufeng on 15/02/2017.
 */
var mongoose = require('mongoose');
var config = require('./config');

module.exports.start = function () {
    var db = mongoose.connect(config.mongodb);
    require('./user.server.model');
    return db;
};