const http = require('http');
const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {
	if (req.method === 'POST') {
		req.pipe(map(chunk => chunk.toString().toUpperCase()))
			.pipe(res);
	}
});

server.listen(port);