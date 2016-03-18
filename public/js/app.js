angular.module('reviewApp', ['ui.router'])
	.directive('navBar', navBar)
	.directive('todoForm', todoForm)
	.filter('reverse', reverse)

function reverse() {
	return function(items) {
		return items.slice().reverse();
	};
}

function todoForm(){
	var directive = {
		restrict: 'E',
		templateUrl: '/partials/todo-form.html'
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