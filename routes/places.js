var
	express = require('express'),
	apiRouter = express.Router()
	mongoose = require('mongoose'),
	Place = require('../models/place.js')
	User = require('../models/user.js')

//middleware to use for all requests
// apiRouter.get('/', function(req,res){
// 	res.json({message: "Api routes routes are working."})
// })


//create controllers

apiRouter.route('/places')
	.get(function(req,res){
		// modify find to have req.search
		Place.find({}, function(err, place){
			res.json(place)
		})
	})
	.post(function(req,res){
		var newPlace = new Place
		newPlace.state = req.body.state
		newPlace.city = req.body.city
		newPlace.title = req.body.title
		newPlace.description = req.body.description
		newPlace.tags = req.body.tags
		newPlace.save(function(err, place){
			if(err) throw err
			res.json({message: "Place Saved!", place: place})
		})
	})

apiRouter.route('/places/:id')
	.get(function(req,res){
		Place.findById(req.params.id, function(err,place){
			if(err) throw err
			res.json(place)
		})
	})

apiRouter.route('/users')
	.post(function(req,res){
		var user = new User() //create new instance of the User model
		//set the users information (comes from the request)
		user.name = req.body.name
		user.username = req.body.username
		user.password = req.body.password

		//save the user and check for errors
		user.save(function(err) {
			if (err){
				//duplicate entry
				if (err.code === 11000)
				return res.json({success: false, message: 'A user with that username already exists.'})
				else {
					return res.send(err)
				}

				res.json({message: 'User created!'})
		}
	})
})

	.get(function(req,res){
		User.find(function(err, users){
			if (err) res.send(err)
			//return the users
			res.json(users)
		})
	})

module.exports = apiRouter
