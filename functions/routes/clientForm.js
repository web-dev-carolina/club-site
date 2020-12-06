var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 


router.post('/clientForm', bodyParser.json(), async function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    db.clientForm.insert(req.body, function(err, clientForm){
        if(err){
            res.send(err);
        }
        res.json(clientForm);
    })
})

module.exports = router;