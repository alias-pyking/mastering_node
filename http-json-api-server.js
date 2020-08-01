const http = require('http');
const url = require('url');
const port = Number(process.argv[2]);
const parsetime = time => {
	return {
		hours: time.getHours(),
		minute: time.getMinutes(),
		seconds: time.getSeconds(),
	};
}
const unixtime = time => {
	return { unixtime: time.getTime() };
}
const server = http.createServer((req, res) => {
	const parsedUrl = new URL(req.url, 'http://example.com');
	const time = new Date(parsedUrl.searchParams.get('iso'));
	let result;
	if (/^\api\/parsetime/.test(req.url)) {
		result = parsetime(time);
	} else if (/^\/api\/unixtime/.test(req.url)) {
		result = unixtime(time);
	}
	if (result) {
		res.writeHead(200, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify(result));
	} else {
		res.writeHead(404);
		res.end();
	}
});

server.listen(port);