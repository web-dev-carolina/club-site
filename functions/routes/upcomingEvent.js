var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var db = mongojs('mongodb+srv://cnell:0nYzjTCvuLi23pkU@cluster0.tak5v.mongodb.net/club-site?retryWrites=true&w=majority', ['upcomingEvents'])

router.get('/upcomingEvents', function(req, res, next){
    db.upcomingEvents.find(function(err, upcomingEvents){
        if(err){
            res.send(err);
        }
        res.json(upcomingEvents);
    })
})

module.exports = router;