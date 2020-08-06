const http = require('http');

http.get(process.argv[2], response => {
	let result = '';
	response.on('data', data => {
		result += data.toString();
	});
	response.on('error', error => {
		console.log(`There was an error ${error}`);
	});
	response.on('end', () => {
		console.log(result.length);
		console.log(result);
	});
});