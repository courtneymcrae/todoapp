angular
	.module('reviewApp')
	.factory('goalsFactory', goalsFactory)

goalsFactory.$inject = ['$http']

function goalsFactory($http){
	var goalsUrl = 'http://localhost:3000/api/goals'
	var goals = {}

	goals.list = function(){
		return $http.get(goalsUrl)
	}

	goals.show = function(goalId){
		return $http.get(goalsUrl + '/' + goalId)
	}

	goals.addGoal = function(data){
		return $http.post(goalsUrl, data)
	}

	goals.updateGoal = function(goalId,data){
		return $http.patch(goalsUrl + '/' + goalId, data)
	}

	goals.removeGoal = function(goalId){
		return $http.delete(goalsUrl + '/' + goalId)
	}
	
	return goals
}