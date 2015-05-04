'use strict';

var http = require('http');
var url = require('url');

var port = 3000;

function start(route, handle) {
	function onRequest(req, res) {
		var postData = '';
		var pathname = url.parse(req.url).pathname;
		console.log('Request for ' + pathname + ' recieved at port ' + port);
		route(handle, pathname, res, req);
	}

	http.createServer(onRequest).listen(port);
	console.log('Server has started on port ' + port);
}

exports.start = start;

