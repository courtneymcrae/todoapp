var
	mongoose = require('mongoose'),
	Schema = mongoose.Schema

var goalsSchema = new Schema({
	name: String,
    // completed: Boolean
})

var Goal = mongoose.model('Goal', goalSchema)

module.exports = Goal