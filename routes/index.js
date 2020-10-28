var express = require('express')
var router = express.Router()
var mongojs = require('mongojs')
var db = mongojs('mongodb+srv://cnell:David3284@cluster0.tak5v.mongodb.net/club-site?retryWrites=true&w=majority', ['tasks'])

router.get('/', function(req, res, next){
    res.render('index.html')
})

module.exports = router