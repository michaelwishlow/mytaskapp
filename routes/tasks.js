var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://mieko1970:nakahara1970@ds139949.mlab.com:39949/mytaskapp_mieko1970',
	['tasks']);

//Get All Tasks
router.get('/tasks', function (req,res,next){
		db.tasks.find(function (err, tasks){
			if(err){
					res.send(err);
			}
			res.json(tasks);
		});
});

//Get Single Task
router.get('/task/:id', function (req,res,next){
		db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function (err, task){
			if(err){
					res.send(err);
			}
			res.json(task);
		});
});


module.exports = router;