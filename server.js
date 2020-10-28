var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var index = require('./routes/index')
var tasks = require('./routes/tasks')

var port = 3000;

var app = express()

//View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

//Set Static Folder
//app.use(express.static(path.join(__dirname, 'client/my-app/src')))
app.use('/', express.static('client/my-app/dist/my-app'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/my-app/dist/my-app'));
 });

//Body Parser MW
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extende: false}))

//Home page
app.use('/', index)
//Interact with API
app.use('/api', tasks)

app.listen(port, function(){
    console.log("Server started on port" + port)
})