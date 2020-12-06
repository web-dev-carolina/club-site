var express = require('express');
var router = express.Router();
const getClient = require("../db"); 

router.get('/projects', async function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    db.projects.find(function(err, projects){
        if(err){
            res.send(err);
        }
        res.json(projects);
    })
})

module.exports = router;