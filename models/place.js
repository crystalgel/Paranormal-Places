//need mongoose for schema (bc mongo is schema-less); validations & restrictions
//everything in model is singular
var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema


var placeSchema = new Schema({
	title: String,
	address: String,
	description: String
})

var Place = mongoose.model('Place', placeSchema)

module.exports = Place
