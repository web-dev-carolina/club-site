var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// let salt = await bcrypt.genSalt();
// let pswdHash = await bcrypt.hash(password, salt);

router.post('/signup', bodyParser.json(), async (req,res) => {
    // let salt = await bcrypt.genSalt();
    // let pswdHash = await bcrypt.hash(password, salt);
});

module.exports = router;

