process.on('message', function (msg, server){
	console.log(msg);
	server.on('connection', function (socket) {
		socket.end('child handled Connection');
	})
})