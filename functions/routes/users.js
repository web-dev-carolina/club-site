var express = require('express');
var router = express.Router();
const getClient = require("../db"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// let salt = await bcrypt.genSalt();
// let pswdHash = await bcrypt.hash(password, salt);

router.get('/users', async function(req, res, next){
    try {
        const client = await getClient();
        const db = client.db("club-site");
        const collection = db.collection("users");
      
      collection.find({}).toArray((err, data) => {
        if(err){
          res.json(err);
        }
        res.json(data);
      });    
    } catch (err) {
          res.status(500).send('Something broke!');
    }

});


router.post('/signup', async (req,res) => {
    // let salt = await bcrypt.genSalt();
    // let pswdHash = await bcrypt.hash(password, salt);
    console.log('here');
    try {
      const client = await getClient();
      const db = client.db("club-site");
      const collection = db.collection("users");
    
      collection.insert(req.body, function (err, user){
        if(err){
          res.send(err);
        }
        res.json(user)
      })   
  } catch (err) {
        res.status(500).send('Something broke!');
  }
});

module.exports = router;