var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 
var mongodb = require('mongodb');

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

router.get('/memberForm', bodyParser.json(), async function(req, res, next){
    try {
        const client = await getClient();
        const db = client.db("club-site");
        const collection = db.collection("memberForm");
      
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


router.put("/memberForm/:id", async function (req, res, next) {
  try {
    const client = await getClient();
    const db = client.db("club-site");
    const collection = db.collection("memberForm");

    const newDoc = req.body;
    collection.updateOne({_id: new mongodb.ObjectID(req.params.id)}, {$set: {read: newDoc.read}});
    res.json(true);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;