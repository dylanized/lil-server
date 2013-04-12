// app setup
  
	var express = require('express');
	
	var port = 8888;
	var i = 0;
	
	var app = express();
	
	app.use(express.logger());
	app.use(express.bodyParser());

// routes for specific pages

	app.get('/', helloWorld);
	
	app.get('/asdf/asdf', function (req, res) {
	  res.writeHead(200, { 'content-type': 'text/html' });
	  res.end('Page not found!');
	});

// route with wildcards

	app.get('/:name/:greet', function (req, res) {
	  res.writeHead(200, { 'content-type': 'text/html' });
	  res.end('<b>' + req.params.greet + ' ' + req.params.name + '</b>');
	});

// web server

	app.listen(port, function () {
	  console.log('server is ready on port', port);
	});
	
	app.post('/a', function(req, res) {
	  res.writeHead(200, { 'content-type': 'text/plain' });
	  res.end(req.body.username + " " + req.body.password);
	});

// view helpers
	
	function helloWorld(req, res) {
	  i++;
	  console.log('Request #' + i, 'Requested: ', req.url);
	  res.writeHead(200, { 'content-type': 'text/html' });
	  res.end('<b>Hello world</b>');
	}


