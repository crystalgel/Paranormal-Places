//need mongoose for schema (bc mongo is schema-less); validations & restrictions
//everything in model is singular
var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema


var bookSchema = new Schema({
	email: String,
	message: String,
	survey: String,
	totalguests: String,
})

//TAGS: http://stackoverflow.com/questions/27851327/saving-an-array-of-tags-to-mongodb-using-mongoose

var Book = mongoose.model('Book', bookSchema)

module.exports = Book
