var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema

var todoSchema = new Schema({
	name: String,
})

var Car = mongoose.model('Todo', todoSchema)

module.exports = Car