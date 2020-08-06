const fs = require('fs');
const pathToFile = process.argv[2];
fs.readFile(pathToFile, 'utf-8', (error, data) => {
	console.log(data.split('\n').length - 1);
});

