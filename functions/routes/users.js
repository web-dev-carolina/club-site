var express = require('express');
var router = express.Router();
const getClient = require("../db"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// let salt = await bcrypt.genSalt();
// let pswdHash = await bcrypt.hash(password, salt);

router.get('/users', async (req, res) => {
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
    try {
      const client = await getClient();
      const db = client.db("club-site");
      const collection = db.collection("users");
    
      collection.insertOne(req.body, (err, user) => {
        if(err){
          res.send(err);
        }
        res.json(user)
      })   
  } catch (err) {
        res.status(500).send('Something broke!');
  }
});

// update user
router.put('/users', async (req, res) => {
  try {
    if(!req.body.user) {
      res.status(400).send("Must include a user in request body")
    }
    const client = await getClient();
    const collection = client.db("club-site").collection("users");
    
    await collection.updateOne({_id: req.body.user._id}, {$set: req.body.user});
    res.status(200).send("Successfully updated");  
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

// delete user by id
router.delete('/users/:id', async (req, res) => {
  try {
    if(!req.params.id) {
      res.status(400).send("Must include a id in request params")
    } else {
      const client = await getClient();
      const collection = client.db("club-site").collection("users");

      await collection.deleteOne({_id: req.params.id});
      res.status(200).send("Successfully deleted");  
    }
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

module.exports = router;