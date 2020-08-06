const http = require('http');
const qs = require('querystring');
http.createServer(function (request, response) {
	let body = "";
	if (request.url === '/') {
		response.writeHead(200, {
			'Content-Type': 'text/html',
		});
		response.end(
			'<form action="/submit" method="post">\
			<input type="text" name="sometext">\
			<input type="submit" value="Upload">\
			</form>'
		);
	}
	if (request.url === '/submit') {
		request.on('readable', function () {
			body += request.read();
		});
		request.on('end', function () {
			const fields = qs.parse(body);
			response.end('Thanks');
			console.log(fields);
		});
	}
}).listen(8080);