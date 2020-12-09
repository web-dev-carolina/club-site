var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 

router.post('/login', bodyParser.json(), async (req,res) => {

    let user = req.body.user;
    let password = req.body.password;
    let user_data;
    console.log(req.body);
    const client = await getClient();
    const db = client.db("club-site");
    const collection = db.collection("users");
  
    user_data = await collection.find({username: user}).toArray();  
    if (user_data == null || user_data === undefined || Object.keys(user_data).length == 0) {
        res.status(404).send("Not found");
        return;
    }
    if (user_data[0].password == password) {
        console.log("User " + user + " credentials valid");
        req.session.user = user;
        res.json(true);
        return;
    }
    res.status(403).send("Unauthorized");
});

module.exports = router;