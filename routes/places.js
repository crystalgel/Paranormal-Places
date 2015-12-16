var
	express = require('express'),
	apiRouter = express.Router()
	mongoose = require('mongoose'),
	Place = require('../models/place.js')


apiRouter.get('/', function(req,res){
	res.json({message: "Api routes routes are working."})
})

//create controllers

apiRouter.route('/places')
	.get(function(req,res){
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


module.exports = apiRouter
