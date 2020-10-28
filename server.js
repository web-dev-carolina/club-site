var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var index = require('./routes/index')

var port = 3000;

var app = express()

//Set Static Folder
app.use('/', express.static('client/my-app/dist/my-app'))

//Body Parser MW
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extende: false}))

//Home page
app.use('/', index)

app.listen(port, function(){
    console.log("Server started on port" + port)
})