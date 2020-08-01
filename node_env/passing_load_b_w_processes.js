const child = require('child_process').fork('./child.js');

const server = require('net').createServer();
server.on('connection', function (socket) {
	socket.end('Parent handled connection');
});

server.listen(3000, function () {
	child.send('The parent message', server);
});