var Todo = require('../models/Todo.js');

function getAllTodos(req,res){
	Todo.find({}, function(err, todos){
		res.json(todos)	
	})
}

function createTodo(req,res){
	var newTodo = new Todo
	newTodo.name = req.body.name
	newTodo.completed = req.body.completed
	newTodo.save(function(err, todo){
		if(err) throw err
		res.json({message: "Todo Saved!", todo: todo})
	})
}

function getOneTodo(req,res){
	Todo.findById(req.params.id, function(err,todo){
		if(err) throw err
		res.json(todo)
	})
}

function updateTodo(req,res){
	Todo.findOneAndUpdate({_id: req.params.id}, req.body, function(err,todo){
		if(err) throw err
		Todo.findById(req.params.id, function(err,updatedTodo){
			res.json(updatedTodo)
		})
	})
}

function deleteTodo(req,res){
	Todo.findOneAndRemove({_id: req.params.id}, req.body, function(err,todo){
		if(err) throw err
		res.json({message:"todo deleted!"})
	})
}


module.exports = {
	getAllTodos : getAllTodos,
	createTodo : createTodo,
	getOneTodo : getOneTodo,
	updateTodo : updateTodo,
	deleteTodo : deleteTodo

}