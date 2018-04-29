const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

require('./modules/database-connection');
const taskRoute = require('./routes/task.route');

app.use(express.static('server/public'));
app.use(bodyParser.json());

app.use('/task', taskRoute);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});