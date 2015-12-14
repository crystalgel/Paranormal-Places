var
	express = require('express'),
	apiRouter = express.Router()
	mongoose = require('mongoose'),
	Places = require('../models/place.js'),
	Place = require('../models/place.js')


apiRouter.get('/', function(req,res){
	res.json({message: "Api routes routes are working."})
})

apiRouter.route('/places')
	.get(function(req,res){
		Places.find({}, function(err, places){
			res.json(places)
		})
	})
	.post(function(req,res){
		var newPlace = new Place
		newPlace.title = req.body.title
		newPlace.address = req.body.address
		newPlace.description = req.body.description
		newPlace.save(function(err, place){
			if(err) throw err
			res.json({message: "Place Saved!", place: place})
		})
	})

apiRouter.route('/places/:id')
	.get(function(req,res){
		Places.findById(req.params.id, function(err,places){
			if(err) throw err
			res.json(places)
		})
	})


module.exports = apiRouter
