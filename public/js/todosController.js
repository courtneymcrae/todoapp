angular
	.module('reviewApp')
	.controller('TodosController', TodosController)

TodosController.$inject = ['todosFactory']

function TodosController (todosFactory){
	var vm = this;
	vm.api = todosFactory
	vm.todos = []
	vm.newTodo = {}
	vm.api.list()
		.success(function(res){
			vm.todos = res
		})
	vm.addTodo = function(name){
		var data = {name:name, completed:completed}
		vm.api.addTodo(data)
			.then(function success(res){
				vm.todos.push(res.data.todo)
				vm.newTodo = {}
			})
	}
}