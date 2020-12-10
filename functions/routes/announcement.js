var express = require('express');
var router = express.Router();
const getClient = require("../db"); 

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
    
      collection.insert(req.body, function (err, announcement){
        if(err){
          res.send(err);
        }
        res.json(announcement)
      })   
  } catch (err) {
        res.status(500).send('Something broke!');
  }

})

module.exports = router;