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
    Task.create(req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`error with create request: ${error}`);
            res.sendStatus(500);
        });
});

module.exports = router;