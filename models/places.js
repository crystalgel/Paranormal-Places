//need mongoose for schema (bc mongo is schema-less); validations & restrictions
var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema


var placesSchema = new Schema({
	title: String,
	address: String,
	description: String
})

// var placesSchema = new Schema({
// 	model: String,
// 	make: String,
// 	year: Number
// })

var Places = mongoose.model('Places', placesSchema)

module.exports = Places
