var express = require('express');
var router = express.Router();
const getClient = require("../db"); 
var mongodb = require('mongodb');

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

router.delete('/testimonials/:id', async function (req, res, next) {
  try {
    const client = await getClient();
    const db = client.db("club-site");
    const collection = db.collection("testimonials");

    collection.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

module.exports = router;