const mongoose = require('mongoose');
const databaseUrl = 'mongodb://localhost:27017/todo';

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`Connected to database: ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log(`Error connecting to database: ${error}`);
});