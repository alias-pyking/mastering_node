const fs = require('fs');
const pathToDir = process.argv[2];
const extension = process.argv[3];
fs.readdir(pathToDir, (error, list) => {
	if(error) {
		console.log('Something went wrong');
	}
	for (const file of list){
		if(file.endsWith('.'+extension)){
			console.log(file);
		}
	}
});

