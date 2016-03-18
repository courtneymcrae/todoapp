angular.module('reviewApp')
    .controller('GoalsDetailsController', GoalsDetailsController)

GoalsDetialController.$inject = ['goalsFactory','$stateParams','$location']

function GoalsDetailsController(goalsFactory,$stateParams,$location){
	var vm = this
	vm.name = 'Goal Detail'
	vm.api = goalsFactory
	vm.goals = null
	vm.editing = false
	vm.showGoal = function(goalId){
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