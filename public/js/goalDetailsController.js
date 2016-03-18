angular.module('reviewApp')
	.controller('goalDetailsController', goalDetailsController)

goalDetailsController.$inject = ['goalsFactory','$stateParams','$location']

function goalsDetailsController(goalssFactory,$stateParams,$location){
	var vm = this
	vm.name = 'Goals Detail'
	vm.api = goalsFactory
	vm.goals = null
	vm.editing = false
	vm.showgoals = function(goalId){
		vm.api.show(goalId).success(function(response){
			vm.goal = response
			console.log(response)
		})
	}
	vm.showGoal($stateParams.goalId)

	vm.updateGoal = function(goalId, name){
		var data = {name: name}
		vm.api.updateGoal(goalId,data).success(function(response){
			console.log(response)
			vm.goal = response
			vm.editing = false
		})
	}

	vm.removeGoal = function(goalId){
		vm.api.removeGoals(goalsId).success(function(response){
			console.log(response)
			$location.path('/goals')
		})
	}
}