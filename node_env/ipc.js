const { connect } = require("net");

setInterval(function () { }, 1e6);
process.on('SIGUSR1', function () {
	console.log('Got a signal');
})