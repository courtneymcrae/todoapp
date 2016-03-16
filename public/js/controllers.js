angular.module('todosApp')
	.controller('todosController', todosController)
	.controller('todoDetailController', todoDetailController)

todosController.$inject = ['todosFactory', '$window']
todoDetailController.$inject = ['todosFactory','$stateParams','$location']

function todosController(todosFactory, $window, $timeout){
	var self = this
	self.name = 'todo List'
	self.api = todosFactory
	self.todos = []
	self.newTodo = {}

	self.api.list().success(function(response){
		self.todos = response
	})

	self.addTodo = function(name, completed){
		var data = {name: name, completed: completed}
		self.api.addTodo(data).then(function success(response){
			self.todos.push(response.data.todo)
			self.newTodo = {}
			$window.document.querySelectorAll('#new-todo-form input')[0].focus()
		})
	}
}

function todoDetailController(todosFactory,$stateParams,$location){
	var self = this
	self.name = 'todo Detail'
	self.api = todosFactory
	self.todo = null
	self.editing = false
	self.showTodo = function(todoId){
		self.api.show(todoId).success(function(response){
			self.todo = response
			console.log(response)
		})
	}
	self.showTodo($stateParams.todoId)

	self.updateTodo = function(todoId, name, completed){
		var data = {name: name, completed: completed}
		self.api.updateTodo(todoId,data).success(function(response){
			console.log(response)
			self.todo = response
			self.editing = false
		})
	}

	self.removeTodo = function(todoId){
		self.api.removeTodo(todoId).success(function(response){
			console.log(response)
			$location.path('/todos')
		})
	}
}