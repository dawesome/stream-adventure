var trumpet = require('trumpet')
var through = require('through2')

var tr = trumpet()

var throughFunc = through(function(buf, _, next) {
	this.push(buf.toString().toUpperCase());
	next();
})

var loudStream = tr.select('.loud').createStream();
loudStream.pipe(throughFunc).pipe(loudStream);

process.stdin.pipe(tr).pipe(process.stdout);