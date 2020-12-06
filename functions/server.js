const functions = require('firebase-functions');
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')
var port = 3000;

var app = express()
const cors_options = {
    origin: 'https://webdevcarolina.com',
    credentials: true
}
app.use(cors(cors_options));
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
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
