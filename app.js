// require modules
express    = require('express'),
app        = express(),               // define our app using express
bodyParser = require('body-parser'),
mongoose = require('mongoose'),
logger = require('morgan'),
apiRoutes = require('./routes/places'),

port = process.env.PORT || 8080,

//'./routes/place.js', 'routes/users.js'),

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', apiRoutes)

// middleware
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


// make files inside the public accessible to app
app.use(express.static(__dirname + '/public'))

// mongoose connection local
mongoose.connect('mongodb://localhost/Paranormal-Places'
	, function(err){
	if(err) return console.log('Cannot connect :(')
	console.log('Connected to MongoDB. Sweet!')
})

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
