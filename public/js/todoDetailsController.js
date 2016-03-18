angular.module('reviewApp')
	.controller('TodoDetailsController', TodoDetailsController)

TodoDetailsController.$inject = ['todosFactory','$stateParams','$location']

function TodoDetailsController(todosFactory,$stateParams,$location){
	var vm = this
	vm.name = 'Todo Detail'
	vm.api = todosFactory
	vm.todo = null
	vm.editing = false
	vm.showTodo = function(todoId){
		vm.api.show(todoId).success(function(response){
			vm.todo = response
			console.log(response)
		})
	}
	vm.showTodo($stateParams.todoId)

	vm.updateTodo = function(todoId, name){
		var data = {name: name, completed: completed}
		vm.api.updateTodo(todoId,data).success(function(response){
			console.log(response)
			vm.todo = response
			vm.editing = false
		})
	}

	vm.removeTodo = function(todoId){
		vm.api.removeTodo(todoId).success(function(response){
			console.log(response)
			$location.path('/todos')
		})
	}
}