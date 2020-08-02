const stream = require('stream');
const net = require('net');

net.createServer(function (socket) {
	socket.write('Go head type something');
	socket.on('readable', function () {
		process.stdout.write(this.read());
	});
}).listen(8080);