const https = require('https');
const fs = require('fs');

https.createServer({
	key: fs.readFileSync('server-key.pem'),
	cert: fs.readFileSync('server-cert.pem')
}, function (req, res) {
		console.log(req.headers);
		
		res.writeHead(200, { 'Content-Type': 'text/plain' });
		res.write('This is something');
		res.end("Shubham");
}).listen(3000);