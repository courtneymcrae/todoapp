angular.module('reviewApp', ['ui.router'])
	.directive('navBar', navBar)
	.directive('todoForm', todoForm)
    .directive('goalForm', goalForm)

function todoForm(){
	var directive = {
		restrict: 'E',
		templateUrl: '/partials/todo-form.html'
	}
	return directive
}
function goalForm(){
	var directive = {
		restrict: 'E',
		templateUrl: '/partials/goal-form.html'
	}
	return directive
}

function navBar(){
	var directive = {
		restrict: 'E',
		templateUrl: '/partials/nav.html',
		transclude: true
	}
	return directive
}