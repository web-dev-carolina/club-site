var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var db = mongojs('mongodb+srv://cnell:0nYzjTCvuLi23pkU@cluster0.tak5v.mongodb.net/club-site?retryWrites=true&w=majority', ['testimonials'])

router.get('/testimonials', function(req, res, next){
    db.testimonials.find(function(err, testimonials){
        if(err){
            res.send(err);
        }
        res.json(testimonials);
    })
})

module.exports = router;