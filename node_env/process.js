const size = process.argv[2];
const totl = process.argv[3] || 100;
const buff = [];
for (let i = 0; i < totl; i++){
	buff.push(new Buffer(size));
	process.stdout.write(process.memoryUsage().heapTotal + '\n');
}