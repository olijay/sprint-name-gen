var express = require('express');
var errorHandler = require('errorhandler');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
// root
app.get('/', function(req,res){});

// suggestBeer
app.post('beer/suggest', function(req,res) {

}); 

// getBeerTypes
app.get('beer/types', function(req,res){});

// getBeerCountries
app.get('beer/countries', function(req,res){});




// 404 handling
app.get('*', function(req, res){ res.send('Not found!', 404); }); 

app.use(errorHandler());

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;
  

  console.log('Sprint Name Generator listening at http://%s:%s', host, port)

})