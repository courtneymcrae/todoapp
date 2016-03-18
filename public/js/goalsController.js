angular
    .module('reviewApp')
	.controller('GoalsController', GoalsController)

GoalsController.$inject = ['goalsFactory']

function GoalsController (goalsFactory){
	var vm = this;
	vm.api = goalsFactory
	vm.goals = []
	vm.newGoal = {}
	vm.api.list()
		.success(function(res){
			vm.goals = res
		})
	vm.addGoal = function(name){
		var data = {name:name}
		vm.api.addGoal(data)
			.then(function success(res){
				vm.goals.push(res.data.goal)
				vm.newGoal = {}
			})
	}
}