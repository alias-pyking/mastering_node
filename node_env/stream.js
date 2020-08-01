const { read } = require('fs');

const Readable = require('stream').Readable;
const fs = require('fs');
const readable = new Readable;
let count = 0;

readable._read = function () {
	if (++count > 10) {
		return readable.push(null);
	}
	setTimeout(function () {
		readable.push(count + '\n');
	}, 500);
};
const writeStream = fs.createWriteStream("./counter", {
	flags: 'w',
	mode: 0666,
});
readable.pipe(writeStream);