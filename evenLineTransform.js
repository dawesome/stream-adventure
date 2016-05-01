var through = require('through2')
var split   = require('split')
var uppercase = false

var tr = through(function(line, encoding, next) {
		if (uppercase) {
			this.push(line.toString().toUpperCase() + '\n')
		} else {
			this.push(line.toString().toLowerCase() + '\n')
		}
		uppercase = !uppercase
		next()
	})

process.stdin.pipe(split())
	.pipe(tr).pipe(process.stdout)

