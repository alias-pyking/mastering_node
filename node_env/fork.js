const cp = require('child_process');
const child = cp.fork(__dirname + '/lovechild.js');
child.on('message', function (message) {
	console.log('Child said:', message);
});
child.send('I love you');