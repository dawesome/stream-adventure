var duplexer = require('duplexer2')
var spawn    = require('child_process').spawn

module.exports = function (cmd, args) {
	child = spawn(cmd, args);
	return duplexer(child.stdin, child.stdout)
};