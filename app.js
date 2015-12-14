// require modules

mongoose = require('mongoose'),
logger = require('morgan'),
bodyParser = require('body-parser'),
express = require('express'),
port = process.env.PORT || 3000,
app = express()

// require routes
var userRoutes = require('./routes/users.js')
var placeRoutes = require('./routes/place.js')
var placesRoutes = require('./routes/places.js')

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

// root route
app.get('/', function(req,res){
	res.render('places', {user: req.user})
})

// start the server on port
app.listen(port, function(){
	console.log("Server Running!", port)
})
