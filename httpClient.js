var request = require('request')
var responseStream = request.post('http://localhost:8099')
process.stdin.pipe(responseStream).pipe(process.stdout)