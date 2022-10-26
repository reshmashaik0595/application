// importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();

//import routes
const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost/application',{ useNewUrlParser: true });

//on connection
mongoose.connection.on('connected', () => {
    console.log("Mongo DB connected");
});

//error handling
mongoose.connection.on('connected', (err) => {
    if (err) {
        console.log("Connection Failed");
    }
});

//port number 
const port = 3000;

//adding middleware
app.use(cors());
app.use(bodyparser.json());

app.use('/api', route);

//testing purpose
app.get('/', (req, res) => {
    res.send('Successfully render')
});

app.listen(port, () => {
    console.log('Node Server started successfully at port ' + port)
});