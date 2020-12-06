var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 


router.post('/clientForm', bodyParser.json(), async function(req, res, next){
    try {
        const client = await getClient();
        const db = client.db("club-site");
        const collection = db.collection("clientForm");
      
      collection.insert(req.body, function(err, clientForm){
        if(err){
            res.send(err);
        }
        res.json(clientForm);
    })
    } catch (err) {
          res.status(500).send('Something broke!');
    }
})

module.exports = router;