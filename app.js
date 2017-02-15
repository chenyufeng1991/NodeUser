var express = require('express');
var app = express();
//数据库mongodb使用
var mongoosejs = require('./mongoose');
mongoosejs.start();

var mongoose = require('mongoose');
var User = mongoose.model('User');

app.get('/getName', function (req, res) {
    res.send("云服务器");
    res.end();
});

app.get('/register', function (req, res) {
    var username = req.query.username;
    var password = req.query.password;
    var user = new User({
        username: username,
        password: password
    });

    user.save(function (error) {
        if (!error) {
            User.find({}, function (error, result) {
                if (!error) {
                    res.send(result);
                    res.end();
                }
                else {
                    res.send("error");
                    res.end();
                }
            });
        }
    });
});

app.listen(8888, function () {
    console.log("Start...");
});