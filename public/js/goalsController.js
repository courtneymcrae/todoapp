angular
	.module('reviewApp')
	.controller('goalsController', goalsController)

goalsController.$inject = ['goalsFactory']

function GoalsController (goalsFactory){
	var vm = this;
	vm.api = goalsFactory
	vm.goals = []
	vm.newGoal = {}
	vm.api.list()
		.success(function(res){
			vm.goals = res
		})
	vm.addgoal = function(name){
		var data = {name:name}
		vm.api.addGoal(data)
			.then(function success(res){
				vm.goals.push(res.data.goal)
				vm.newGoal = {}
			})
	}
}