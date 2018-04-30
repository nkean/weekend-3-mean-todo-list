const router = require('express').Router();
const Task = require('../models/task.schema');

router.get('/', (req, res) => {
    Task.find({})
        .then((dataReturned) => {
            res.send(dataReturned);
        })
        .catch((error) => {
            console.log(`error with find request: ${error}`);
            res.sendStatus(500);
        })
});

router.post('/', (req, res) => {
    const newTask = req.body;
    newTask.completed = false;

    Task.create(newTask)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`error with create request: ${error}`);
            res.sendStatus(500);
        });
});

router.put('/', (req, res) => {
    Task.findByIdAndUpdate(req.body._id, req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`error with update request: ${error}`);
            res.sendStatus(500);
        })
})

router.delete('/', (req, res) => {
    Task.findByIdAndRemove(req.query._id)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`error with remove request: ${error}`);
            res.sendStatus(500);
        })
})

module.exports = router;