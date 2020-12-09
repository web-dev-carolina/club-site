var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const getClient = require("../db"); 

app.get('/logout', (req, res) => {
    delete req.session.user;
    res.json(true);
})

module.exports = router;