var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema

var todoSchema = new Schema({
	name: String,
	// completed: Boolean
})

var Car = mongoose.model('Todo', todoSchema)

module.exports = Car