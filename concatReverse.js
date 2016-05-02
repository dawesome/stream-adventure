var concat = require('concat-stream')

process.stdin.pipe(concat(function(stream) {
	process.stdout.write(stream.reverse())
}))