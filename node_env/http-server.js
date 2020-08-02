const http = require('http');
// const server = http.createServer(function (request, response) {
// 	console.log('Got Request headers: ');
// 	console.log(request.headers);
// 	response.writeHead(200, {
// 		'Content-Type': 'text/plain',
// 	});
// 	response.write('PONG');
// 	response.end();
// });
// server.listen(8080);


const server = new http.Server();

server.on('connection', function (socket) {
	console.log('Client arrived: ', new Date());
	socket.on('end', function () {
		console.log('Client left: ', new Date());
	})
});
server.listen(8080);