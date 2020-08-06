const http = require('http');
const fs = require('fs');
const port = Number(process.argv[2]);
const pathToFile = process.argv[3];
const server = http.createServer((request, response) => {
	fs.createReadStream(pathToFile)
		.on('data', data => {
			response.setHeader('content-type', 'text/plain');
			response.end(data);
		});
});

server.listen(port);