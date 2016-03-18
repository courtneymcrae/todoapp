var
	express = require('express'),
	apiRouter = express.Router(),
	mongoose = require('mongoose'),
	todosController = require('../controllers/todosController.js');
	

apiRouter.get('/', function(req,res){
	res.json({message: "Api routes are working."})
})

// apiRouter.route('/todos')
// 	.get(todosController.getAllTodos)
// 	.post(todosController.createTodo)

apiRouter.route('/todos/:id')
	.get(todosController.getOneTodo)
	.patch(todosController.updateTodo)
	.delete(todosController.deleteTodo)

module.exports = apiRouter
