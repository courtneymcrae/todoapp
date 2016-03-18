angular
	.module('reviewApp')
	.factory('todosFactory', todosFactory)

todosFactory.$inject = ['$http']

function todosFactory($http){
	var todosUrl = 'http://localhost:3000/api/todos'
	var todos = {}

	todos.list = function(){
		return $http.get(todosUrl)
	}

	todos.show = function(todoId){
		return $http.get(todosUrl + '/' + todoId)
	}

	todos.addTodo = function(data){
		return $http.post(todosUrl, data)
	}

	todos.updateTodo = function(todoId,data){
		return $http.patch(todosUrl + '/' + todoId, data)
	}

	todos.removeTodo = function(todoId){
		return $http.delete(todosUrl + '/' + todoId)
	}
	
	return todos
}