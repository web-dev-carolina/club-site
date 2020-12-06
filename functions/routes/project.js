var express = require('express');
var router = express.Router();
const getClient = require("../db"); 

router.get('/projects', async function(req, res, next){
    db.projects.find(function(err, projects){
        if(err){
            res.send(err);
        }
        res.json(projects);
    })
})

module.exports = router;