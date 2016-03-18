var express = require('express')
var apiRouter = express.Router() //get an instance of express router
var usersController = require('../controllers/usersController')
var carsController = require('../controllers/carsController')

var User = require('../models/User')


// Non-Authenticated routes ===========

//make a user
apiRouter.route('/users')
	.post(usersController.create)

//login
apiRouter.route('/authenticate')
	.post(usersController.authenticate)

// Authenticated routes  ==============
//config middleware for auth
apiRouter.use(usersController.checkUser)

//users index
apiRouter.route('/users')
	.get(usersController.index)

//logged in user detail
apiRouter.route('/me')
	.get(function(req, res){
		res.send(req.decoded)
	})

//user CRUD
apiRouter.route('/users/:user_id')
	.get(usersController.show)
	.put(usersController.update)
	.delete(usersController.destroy)

//cars CRUD
apiRouter.route('/cars')
	.get(carsController.getAllCars)
	.post(carsController.createCar)

apiRouter.route('/cars/:id')
	.get(carsController.getOneCar)
	.patch(carsController.updateCar)
	.delete(carsController.deleteCar)

module.exports = apiRouter