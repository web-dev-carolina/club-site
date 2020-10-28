var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var port = 3000;

var app = express()
var router = express.Router();

var projects = require('./routes/project')

//View Engine
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

//Set Static Folder
app.use(express.static('client/my-app/dist/my-app'))

//Body Parser MW
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extende: false}))

app.use('/api', projects)

app.listen(port, function(){
    console.log("Server started on port" + port)
})