var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post('/login', bodyParser.json(), async (req,res) => {

    let user = req.body.user;
    let password = req.body.password;
    let user_data;

    const client = await getClient();
    const db = client.db("club-site");
    const collection = db.collection("users");
  
    user_data = await collection.find({username: user}).toArray();  
    if (user_data === null || user_data === undefined || Object.keys(user_data).length === 0) {
        res.status(404).send("User not found");
        return;
    }

    // after implementing bcrypt in signup: 
    // if ( await bcrypt.compare(password, user.password) {
    if (user_data[0].password === password) {
        console.log("User: " + user + ". Credentials valid");
        req.session.user = user;
        const token = jwt.sign({ id: user._id }, "jwt_webdevsite");
        res.json({
            token, 
            user_data
        });
        return;
    }
    res.status(403).send("Unauthorized credentials");
});

router.post("/tokenCheck", async (req, res) => {
    try {
        const token = req.header("wdc-auth-token");
        if (!token) return res.json(false);

        const verified = jwt.verify(token, "jwt_webdevsite");
        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if (!user) return res.json(false);

        return res.json(true);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;