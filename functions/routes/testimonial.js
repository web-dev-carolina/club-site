var express = require('express');
var router = express.Router();
const getClient = require("../db"); 

router.get('/testimonials', async function(req, res, next){
    try {
        const client = await getClient();
        const db = client.db("club-site");
        const collection = db.collection("testimonials");
      
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

router.post('/testimonials', async function(req, res, next){
  try {
      const client = await getClient();
      const db = client.db("club-site");
      const collection = db.collection("testimonials");
    
      collection.insert(req.body, function (err, testimonial){
        if(err){
          res.send(err);
        }
        res.json(testimonial)
      })   
  } catch (err) {
        res.status(500).send('Something broke!');
  }

})

module.exports = router;