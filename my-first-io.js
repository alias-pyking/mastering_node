const fs = require('fs');
const pathToFile = process.argv[2];
const buffer = fs.readFileSync(pathToFile);
const str = buffer.toString();
let result = 0;
for(const s of str){
	if(s == '\n'){
		result++;
	}
}
console.log(result);
