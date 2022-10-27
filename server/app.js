// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors'); // Cross-Origin Resource Sharing
var app = express();

//import routes
const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost/application', { useNewUrlParser: true });

//on connection
mongoose.connection.on('connected', (err) => {
    if (err)
        console.log(" Mongo DB Connection Failed.");
    console.log("Mongo DB connected Successfully.");
});

//port number 
const port = 3000;

//adding middleware
app.use(cors());
app.use(bodyparser.json());

app.use('/api', route);

//testing purpose
app.get('/', (req, res) => {
    res.send('NODE is UP and RUNNING 😃');
});

app.listen(port, (err) => {
    if (err)
        console.log('Failed to start NODE to the port:' + port);
    console.log('NODE is listening to the port:' + port)
});