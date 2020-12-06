const functions = require('firebase-functions');
var express = require('express')
const cors = require('cors')
var path = require('path')
var bodyParser = require('body-parser')
var port = 3000;

var app = express()
app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var projects = require('./routes/project')
var announcements = require('./routes/announcement')
var upcomingEvents = require('./routes/upcomingEvent')
var testimonials = require('./routes/testimonial')
var memberForm = require('./routes/memberForm')
var clientForm = require('./routes/clientForm')
var generalForm = require('./routes/generalForm')

//View Engine
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

//Set Static Folder
app.use(express.static('../public/dist/my-app'))

//Body Parser MW
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extende: false}))

//Connect API
app.use('/api', projects)
app.use('/api', announcements)
app.use('/api', upcomingEvents)
app.use('/api', testimonials)
app.use('/api', memberForm)
app.use('/api', clientForm)
app.use('/api', generalForm)

app.listen(port, function(){
    console.log("Server started on port" + port)
})

exports.app = functions.https.onRequest(app);
