var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var db = mongojs('mongodb+srv://cnell:0nYzjTCvuLi23pkU@cluster0.tak5v.mongodb.net/club-site?retryWrites=true&w=majority', ['clientForm'])
var bodyParser = require('body-parser')

router.post('/clientForm', bodyParser.json(), function(req, res, next){
    db.clientForm.insert(req.body, function(err, clientForm){
        if(err){
            res.send(err);
        }
        res.json(clientForm);
    })
})

module.exports = router;