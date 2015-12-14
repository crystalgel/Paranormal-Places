// require modules
express    = require('express'),
app        = express(),               // define our app using express
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
logger = require('morgan'),
apiRoutes = require('./routes/places.js'),
port = process.env.PORT || 8080,

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', apiRoutes)

// mongoose connection local
mongoose.connect('mongodb://localhost/Paranormal-Places'
	, function(err){
	if(err) return console.log('Cannot connect :(')
	console.log('Connected to MongoDB. Sweet!')
})

// middleware
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// make files inside the public accessible to app
app.use(express.static(__dirname + '/public'))

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
