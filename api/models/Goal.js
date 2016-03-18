var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema

var goalSchema = new Schema({
	name: String,
})

var Goal = mongoose.model('Goal', goalSchema)

module.exports = Goal