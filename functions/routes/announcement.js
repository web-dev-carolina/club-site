var express = require('express');
var router = express.Router();
const getClient = require("../db"); 

router.get('/announcements', async function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
    try {
        const client = await getClient();
        const db = client.db("club-site");
        const collection = db.collection("announcements");
      
      collection.find({}).toArray((err, data) => {
        if(err){
          res.send(err);
        }
        res.send(data);
      });    
    } catch (err) {
          res.status(500).send('Something broke!');
    }

})

module.exports = router;