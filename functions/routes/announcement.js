var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var db = mongojs('mongodb+srv://cnell:0nYzjTCvuLi23pkU@cluster0.tak5v.mongodb.net/club-site?retryWrites=true&w=majority', ['announcements']);

router.get('/announcements', function(req, res, next){
    db.announcements.find(function(err, announcements){
        if(err){
            res.send(err);
        }
        res.json(announcements);
    })
})

module.exports = router;