var Goal = require('../models/Goal.js');

function getAllGoals(req,res){
	Goal.find({}, function(err, goals){
		res.json(goals)	
	})
}

function createGoal(req,res){
	var newGoal = new Goal
	newGoal.name = req.body.name
	newGoal.save(function(err, goal){
		if(err) throw err
		res.json({message: "Goal Saved!", goal: goal})
	})
}

function getOneGoal(req,res){
	Goal.findById(req.params.id, function(err,goal){
		if(err) throw err
		res.json(goal)
	})
}

function updateGoal(req,res){
	Goal.findOneAndUpdate({_id: req.params.id}, req.body, function(err,goal){
		if(err) throw err
		Goal.findById(req.params.id, function(err,updatedGoal){
			res.json(updatedGoal)
		})
	})
}

function deleteGoal(req,res){
	Goal.findOneAndRemove({_id: req.params.id}, req.body, function(err,goal){
		if(err) throw err
		res.json({message:"Goal deleted!"})
	})
}


module.exports = {
	getAllGoals : getAllGoals,
	createGoal : createGoal,
	getOneGoal : getOneGoal,
	updateGoal : updateGoal,
	deleteGoal : deleteGoal,

}