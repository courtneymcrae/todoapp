var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema

var todoSchema = new Schema({
	name: String,
})

var Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo