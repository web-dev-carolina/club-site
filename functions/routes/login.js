var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 

router.post('/login', bodyParser.json(), async (req,res) => {

    let user = req.body.user;
    let password = req.body.password;
    let user_data = {};
    console.log(req.body);
    try {
        const client = await getClient();
        const db = client.db("club-site");
        const collection = db.collection("users");
      
        let user_data = collection.find({username: 'cnell'}).toArray((err, data) => {
        if(err){
          res.json(err);
        }
        console.log(data);
      });    
    } catch (err) {
          res.status(500).send('Something broke!');
    }
    console.log(user_data);
    if (user_data == null || user_data === undefined) {
        res.status(404).send("Not found");
        return;
    }
    if (user_data.password == password) {
        console.log("User " + user + " credentials valid");
        req.session.user = user;
        res.json(true);
        return;
    }
    res.status(403).send("Unauthorized");
});

module.exports = router;