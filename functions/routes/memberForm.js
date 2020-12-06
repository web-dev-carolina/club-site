var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 

router.post('/memberForm', bodyParser.json(), async function(req, res, next){
    try {
        const client = await getClient();
        const db = client.db("club-site");
        const collection = db.collection("memberForm");
      
      collection.insert(req.body, function(err, memberForm){
        if(err){
            res.send(err);
        }
        res.json(memberForm);
    })
    } catch (err) {
          res.status(500).send('Something broke!');
    }
})

module.exports = router;