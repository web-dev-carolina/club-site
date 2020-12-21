var express = require('express');
var router = express.Router();
const getClient = require("../db"); 
var mongodb = require('mongodb');

router.get('/announcements', async function(req, res, next){
    try {
        const client = await getClient();
        const db = client.db("club-site");
        const collection = db.collection("announcements");
      
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

router.post('/announcements', async function(req, res, next){
  try {
      const client = await getClient();
      const db = client.db("club-site");
      const collection = db.collection("announcements");
    
      collection.insertOne(req.body, function (err, announcement){
        if(err){
          res.send(err);
        }
        res.json(announcement)
      })   
  } catch (err) {
        res.status(500).send('Something broke!');
  }

})

router.delete('/announcements/:id', async function (req, res, next) {
  try {
    const client = await getClient();
    const db = client.db("club-site");
    const collection = db.collection("announcements");

    collection.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

router.put("/announcements/:id", async function (req, res, next) {
  try {
    const client = await getClient();
    const db = client.db("club-site");
    const collection = db.collection("announcements");

    const newDoc = req.body;
    collection.updateOne({_id: new mongodb.ObjectID(req.params.id)}, {$set: {title: newDoc.title, body: newDoc.body, date: newDoc.date}});
    res.json(true);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;