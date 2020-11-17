var express = require('express');
var router = express.Router();
var mongojs = require('mongojs')
var db = mongojs('mongodb+srv://cnell:r[~7vn&seP_DV&=t@cluster0.tak5v.mongodb.net/club-site?retryWrites=true&w=majority', ['projects'])

router.get('/projects', function(req, res, next){
    db.projects.find(function(err, projects){
        if(err){
            res.send(err);
        }
        res.json(projects);
    })
})

module.exports = router;