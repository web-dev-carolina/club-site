var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 
var mongodb = require('mongodb');

router.post('/generalForm', bodyParser.json(), async function(req, res, next){
    try {
        const client = await getClient();
        const db = client.db("club-site");
        const collection = db.collection("generalForm");
      
      collection.insert(req.body, function(err, generalForm){
        if(err){
            res.send(err);
        }
        res.json(generalForm);
    })
    } catch (err) {
          res.status(500).send('Something broke!');
    }
})

router.get('/generalForm', bodyParser.json(), async function(req, res, next){
    try {
        const client = await getClient();
        const db = client.db("club-site");
        const collection = db.collection("generalForm");
      
      collection.find({}).toArray((err, data) => {
        if(err){
          res.json(err);
        }
        res.json(data);
      });    
    } catch (err) {
          res.status(500).send('Something broke!');
    }
})


module.exports = router;