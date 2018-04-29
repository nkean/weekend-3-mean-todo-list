const router = require('express').Router();
const Task = require('../models/task.schema');

router.get('/', (req, res) => {
    console.log('GET is working')
    res.sendStatus(200);
});

module.exports = router;