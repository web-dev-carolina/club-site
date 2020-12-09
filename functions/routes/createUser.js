var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 

router.post('/createUser', (req,res) => {

    let user = req.body.user;
    let password = req.body.password;
    let type = req.body.type;

    if(User.getAllIDsForOwner(user).length != 0){
        res.status(403).send("User taken");
        return;
    }

    let u = User.create(user, password, type);

    if(u != null){
        req.session.user = user;
        res.json(true);
        return;
    } else {
        res.status(404).send("Not found");
        return;
    }
})

module.exports = router;