var
	express = require('express'),
	apiRouter = express.Router()
	mongoose = require('mongoose'),
	Places = require('../models/places.js')

apiRouter.get('/', function(req,res){
	res.json({message: "Api routes are working."})
})

apiRouter.route('/places')
	.get(function(req,res){
		Places.find({}, function(err, places){
			res.json(places)
		})
	})
	.post(function(req,res){
		var newPlaces = new Places
		newPlaces.title = req.body.title
		newPlaces.address = req.body.address
		newPlaces.description = req.body.description
		newPlaces.save(function(err, places){
			if(err) throw err
			res.json({message: "Places Saved!", places: places})
		})
	})

apiRouter.route('/places/:id')
	.get(function(req,res){
		Places.findById(req.params.id, function(err,places){
			if(err) throw err
			res.json(places)
		})
	})

apiRouter.get('/destroy-all', function(req,res){
	Places.remove({}, function(err){
		if(err) throw err
		res.json({message: 'All  destroyed! Booooom!'})
	})
})

module.exports = apiRouter
