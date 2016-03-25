var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

// connect to db
mongoose.connect('mongodb://heroku_4t7wf0ql:dim63brs292l6irb85kfs6sd2i@ds025419.mlab.com:25419/heroku_4t7wf0ql');

// models
var Comic = require('./api/models/comic');

// controllers
var comicsController = require('./api/controllers/comicsController');

// middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// routes
app.get('/api/comics', comicsController.index);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});


// start server
app.listen(port, function() {
  console.log('server running on port', port);
});
