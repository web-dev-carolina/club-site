var express = require('express');
var router = express.Router();
const getClient = require("../db");
var mongodb = require('mongodb');

router.get('/upcomingEvents', async function (req, res, next) {
  try {
    const client = await getClient();
    const db = client.db("club-site");
    const collection = db.collection("upcomingEvents");

    collection.find({}).toArray((err, data) => {
      if (err) {
        res.json(err);
      }
      res.json(data);
    });
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});


router.post('/upcomingEvents', async function (req, res, next) {
  try {
    const client = await getClient();
    const db = client.db("club-site");
    const collection = db.collection("upcomingEvents");

    collection.insertOne(req.body, function (err, upcomingEvent) {
      if (err) {
        res.send(err);
      }
      res.json(upcomingEvent)
    })
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

router.delete('/upcomingEvents/:id', async function (req, res, next) {
  try {
    const client = await getClient();
    const db = client.db("club-site");
    const collection = db.collection("upcomingEvents");

    collection.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.send(true);
  } catch (err) {
    res.status(500).send('Something broke!');
  }
});

router.put("/upcomingEvents/:id", async function (req, res, next) {
  try {
    const client = await getClient();
    const db = client.db("club-site");
    const collection = db.collection("upcomingEvents");

    const newDoc = req.body;
    collection.updateOne({_id: new mongodb.ObjectID(req.params.id)}, {$set: {title: newDoc.title, body: newDoc.body, day: newDoc.day, month: newDoc.month}});
    res.json(true);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;