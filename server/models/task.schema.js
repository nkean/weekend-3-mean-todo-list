const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: { type: String, required: true },
    completed: { type: Boolean, required: false }
});

module.exports = mongoose.model('task', taskSchema);