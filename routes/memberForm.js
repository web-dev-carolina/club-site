var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var db = mongojs('mongodb+srv://cnell:0nYzjTCvuLi23pkU@cluster0.tak5v.mongodb.net/club-site?retryWrites=true&w=majority', ['memberForm'])
var bodyParser = require('body-parser')

router.post('/memberForm', bodyParser.json(), function(req, res, next){
    db.memberForm.insert(req.body, function(err, memberForm){
        if(err){
            res.send(err);
        }
        res.json(memberForm);
    })
})

module.exports = router;