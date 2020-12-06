var express = require('express');
var router = express.Router();
const getClient = require("../db"); 

router.get('/upcomingEvents', async function(req, res, next){
    try {
        res.header('Access-Control-Allow-Origin', '*');
        const client = await getClient();
        const db = client.db("club-site");
        const collection = db.collection("upcomingEvents");
      
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