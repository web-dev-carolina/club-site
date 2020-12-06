var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 

router.post('/generalForm', bodyParser.json(), async function(req, res, next){
    db.generalForm.insert(req.body, function(err, generalForm){
        if(err){
            res.send(err);
        }
        res.json(generalForm);
    })
})

module.exports = router;