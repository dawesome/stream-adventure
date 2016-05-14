var through = require('through2');
var http    = require('http');

var server = http.createServer(function(request, response) {
	if (request.method === 'POST') {
		request.pipe(through(function(buf, _, next) {
			this.push(buf.toString().toUpperCase());
			next();
		},
		function(done) { done(); })
		).pipe(response);
	}
})

server.listen(process.argv[2])