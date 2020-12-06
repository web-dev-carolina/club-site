var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 

router.post('/memberForm', bodyParser.json(), async function(req, res, next){
    db.memberForm.insert(req.body, function(err, memberForm){
        if(err){
            res.send(err);
        }
        res.json(memberForm);
    })
})

module.exports = router;