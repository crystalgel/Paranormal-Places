//need mongoose for schema (bc mongo is schema-less); validations & restrictions
//everything in model is singular
var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema


var placeSchema = new Schema({
	state: String,
	city: String,
	title: String,
	description: String,
	tags: [String]
})

//TAGS: http://stackoverflow.com/questions/27851327/saving-an-array-of-tags-to-mongodb-using-mongoose

var Place = mongoose.model('Place', placeSchema)

module.exports = Place
