const express = require('express');
const router = express.Router();
const getClient = require("../db"); 

// get all projects
router.get('/projects', async (req, res) => {
  try {
    const client = await getClient();
    const collection = client.db("club-site").collection("projects");
    
    await collection.find().toArray((err, data) => {
      if(err){
        res.send(err);
      }
      res.send(data);
    });    
  } catch (err) {
        res.status(500).send('Something broke!');
  }
});

// create new project
router.post('/projects', async (req, res) => {
  try {
    if(!req.body.project) {
      res.status(400).send("Must include a project in request body")
    }
    const client = await getClient();
    const collection = client.db("club-site").collection("projects");
    
    await collection.insertOne(req.body.project);
    res.status(200).send("Successfully created");  
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

// update project
router.put('/projects', async (req, res) => {
  try {
    if(!req.body.project) {
      res.status(400).send("Must include a project in request body")
    }
    const client = await getClient();
    const collection = client.db("club-site").collection("projects");
    
    await collection.updateOne({_id: req.body.project._id}, {$set: req.body.project});
    res.status(200).send("Successfully updated");  
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

// delete project by id
router.delete('/projects/:id', async (req, res) => {
  try {
    if(!req.params.id) {
      res.status(400).send("Must include a id in request params")
    } else {
      const client = await getClient();
      const collection = client.db("club-site").collection("projects");

      await collection.deleteOne({_id: req.params.id});
      res.status(200).send("Successfully deleted");  
    }
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

module.exports = router;