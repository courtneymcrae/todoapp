angular.module('todosApp')
	.config(todoRoutes)

todoRoutes.$inject = ['$stateProvider', '$urlRouterProvider']

function todoRoutes($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/todos')
	$stateProvider
		.state('todos', {
			url: '/todos',
			templateUrl: 'partials/todo-list.html',
			controller: 'todosController as todosCtrl'
		})
		.state('detail', {
			url: '/todos/:todoId',
			templateUrl: 'partials/todo-detail.html',
			controller: 'todoDetailController as todoDetailCtrl'
		})      
}