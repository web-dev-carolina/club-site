var express = require('express')
var router = express.Router()
var mongojs = require('mongojs')
var db = mongojs('mongodb+srv://cnell:David3284@cluster0.tak5v.mongodb.net/club-site?retryWrites=true&w=majority', ['tasks'])

//Get all
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err)
        }
        res.json(tasks)
    })
})

//Get single
router.get('/task/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, task){
        if(err){
            res.send(err)
        }
        res.json(task)
    })
})

//Save Task
router.post('/task', function(req, res, next){
    var task = req.body;
    if(!task.title || task.isDone + ''){
        res.status(400)
        res.json({
            "error": "Bad Data"
        })
    }else {
        db.tasks.save(task, function(err, task){
            if(err){
                res.send(err)
            }
            res.json(task)
        })
    }
})


//Delete Task
router.delete('/task/:id', function(req, res, next){
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)},function(err, task){
        if(err){
            res.send(err)
        }
        res.json(task)
    })
})

//Update Task
router.put('/task/:id', function(req, res, next){
    var task = req.body;
    var updTask = {}

    if(task.isDone){
        updTask.isDone = task.isDone
    }
    if(task.title){
        updTask.title = task.title
    }
    if(!upTask){
        res.status(400)
        res.json({
            "error" :"Bad Date"
        })
    } else{
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},upTask,{},function(err, task){
            if(err){
                res.send(err)
            }
            res.json(task)
        })
    }
})
module.exports = router